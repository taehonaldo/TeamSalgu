require('dotenv').config();

const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const syncDb = require('../syncDb');

syncDb().then(_=> {
    console.log('Sync database!');
    server.listen(3000, () => {
        console.log('Server is running on 3000 port');
    });
});