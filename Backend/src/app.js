const express = require('express');
const router = require("./routes");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID = "443671950485-1m3hjbh98hdjbaspion0snp5t9sb1vjc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// db session store options
const options = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Mate_app_session",
};

// mysql session store 생성
const sessionStore = new MySQLStore(options);

// express session 연결
app.use(
    session({
        secret: "secret key",
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
    })
);


const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// passport 초기화 및 session 연결
app.use(passport.initialize());
app.use(passport.session());

// login이 최초로 성공했을 때만 호출되는 함수
// done(null, user.id)로 세션을 초기화 한다.
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// 사용자가 페이지를 방문할 때마다 호출되는 함수
// done(null, id)로 사용자의 정보를 각 request의 user 변수에 넣어준다.
passport.deserializeUser(function (id, done) {
    done(null, id);
});

// Google login 전략
// 로그인 성공 시 callback으로 request, accessToken, refreshToken, profile 등이 나온다.
// 해당 콜백 function에서 사용자가 누구인지 done(null, user) 형식으로 넣으면 된다.
// 이 예시에서는 넘겨받은 profile을 전달하는 것으로 대체했다.
passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8080/auth/google/callback",
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            console.log(profile);
            console.log(accessToken);

            return done(null, profile);
        }
    )
);

// login 화면
// 이미 로그인한 회원이라면(session 정보가 존재한다면) main화면으로 리다이렉트
app.get("/login", (req, res) => {
    if (req.user) return res.redirect("/");
    fs.readFile("./webpage/login.html", (error, data) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

// login 화면
// 로그인 하지 않은 회원이라면(session 정보가 존재하지 않는다면) login화면으로 리다이렉트
app.get("/", (req, res) => {
    if (!req.user) return res.redirect("/login");
    fs.readFile("./webpage/main.html", (error, data) => {
        if (error) {
            console.log(error);
            return res.sendStatus(500);
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

// google login 화면
app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

// google login 성공과 실패 리다이렉트
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);

// logout
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});

app.use('/', router);

module.exports = app;