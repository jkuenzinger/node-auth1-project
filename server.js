const express = require("express");
const session = require("express-session");
const helmet = require("helmet");



const db = rewuire('./data/dbConfig.js')

const server = express();
server.use(helmet());
server.use(express.json());
server.use("/api/users")
server.use("api/auth")

module.exports = server;