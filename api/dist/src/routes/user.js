"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('soy la ruta get!');
});
router.post('/', (req, res) => {
    res.send('soy la ruta post!');
});
router.get('/user', (req, res, next) => {
    // console.log("estoy en el get de user");
    User_1.User.findAll()
        .then((users) => {
        res.send(users);
    })
        .catch((error) => next(error));
});
router.post('/user', (req, res, next) => {
    // console.log("estoy en el post de user");
    const user = req.body;
    User_1.User.create(user)
        .then((createdUser) => {
        res.send(createdUser);
    })
        .catch((error) => next(error));
});
exports.default = router;
