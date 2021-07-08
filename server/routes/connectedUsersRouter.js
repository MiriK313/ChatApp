var express = require("express");
const { response } = require("express");
const { Sequelize } = require("sequelize");
const db = require("./../config/config");
const User = require("./../models/user");
const models = require('../models/index');

const utills = require("./../utills");

var router = express.Router();

// const User = db.define("user", {
//   nickname: Sequelize.STRING,
// });

/* Find by nickname user*/
router.get("/", (req, res) => {
    (async() => {
        await models.User.findAll({
            where: {
                nickname: req.query.nickname,
            },
        }).then((user) => {
            res.json(user);
        });
    })();
});

// /* Post user to DB */
router.post("/", (req, res) => {
    (async() => {
        let nickname = req.body.nickname;
        models.User.create({
            nickname: nickname,
        }).then(function(user) {});
    })();
});

router.delete("/", (req, res) => {
    (async() => {
        models.User.destroy({
                where: {
                    nickname: req.query.nickname,
                },
            })
            .then((result) => {
                res.send(200);
            })
            .catch((error) => {
                console.log(error);
            });
    })();
});

module.exports = router;