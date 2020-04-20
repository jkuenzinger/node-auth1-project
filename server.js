const express = require("express");
const session = require("express-session");
const helmet = require("helmet");

const UserRouter = require('./users/user-router');
const AuthRouter = require('./auth/auth-router');
const restricted = require('./auth/restricted');


const db = require('./data/dbConfig.js')

const server = express();



const sessionConfig = {
    name: "monster",
    secret: "keep it secret, keep it safe!",
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false, 
      httpOnly: true, 
    },
    resave: false,
    saveUninitialized: true, 
  };



server.use(helmet());
server.use(express.json());
server.use("/api/users", restricted, UserRouter);
server.use("api/auth", AuthRouter);

server.get('./', (req,res) => {
    res.json({ message: "it's alllive itsssss aliiveee!!!"})
})

module.exports = server;