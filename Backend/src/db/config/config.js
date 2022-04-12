require('dotenv').config();
const env = process.env;

const development = {
    "username": "root",
    "password": "1234",
    "database": "sports_mate",
    "host": "127.0.0.1",
    "port": 3307,
    "dialect": "mysql"
}

const test = {
    "username": "root",
    "password": "1234",
    "database": "sports_mate",
    "host": "127.0.0.1",
    "port": 3307,
    "dialect": "mysql"
}

const production = {
    "username": "root",
    "password": "1234",
    "database": "sports_mate",
    "host": "127.0.0.1",
    "port": 3307,
    "dialect": "mysql" 
}

module.exports = {development, test, production};