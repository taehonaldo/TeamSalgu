require('dotenv').config();

const app = require("./app");
const http = require("http");
const server = http.createServer(app);
var db_config = require('./config/database.js');

var conn = db_config.init();

(async function () {
    try {
    // database 연결
    //   db_config.connect(conn);

      server.listen(process.env.SERVER_PORT, () =>
        console.log("Server is listening to port: ", process.env.SERVER_PORT)
      );
    } catch (err) {
      console.log(err);
    }
})();