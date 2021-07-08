var express = require("express");
const { response } = require("express");
const { Sequelize } = require("sequelize");
const db = require("./../config/config");
const { Message } = require("./../models/message");
const models = require('../models/index');
const utills = require("./../utills");

var router = express.Router();

// const Message = db.define("message", {
//   content: Sequelize.TEXT,
//   nickname: Sequelize.STRING,
//   avatar: Sequelize.STRING,
//   id: Sequelize.STRING,
//   index: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//     autoIncrement: true,
//   },
// });

/* Get all Messages from DB and return answer to user*/
router.get("/", (req, res) => {
    (async() => {
        newMessages = await models.Message.findAll().then((messages) => {
            var messages = utills.ParseMessage(messages);
            res.json(messages);
        });
    })();
});

/* Post Message to DB and return answer to user*/
router.post("/", (req, res) => {
    (async() => {
        let messageObject = req.body.messageObject;
        models.Message.create({
            content: messageObject.body.message,
            nickname: messageObject.body.currentUser.nickname,
            avatar: messageObject.body.currentUser.avatar,
            id: messageObject.id,
        }).then(function(messages) {
            res.send(messages);
        });
    })();
});

module.exports = router;