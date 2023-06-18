'use strict';
const User = require("../models/user.model.js");

var userCtrl = function () {

};

userCtrl.addUser = async (req, res, next) => {
    let data = req.body;
    console.log("data:", data)

    try {
        const { username } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).send({ error: 'Username already exists' });
        }

        var user = await User.create(data)
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(user)
}

userCtrl.getUserList = async (req, res, next) => {
    console.log("getUserList")
    try {
        var user = await User.find()
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(user)
}
userCtrl.getUserById = async (req, res, next) => {
    try {
        const {id} = req.params
        console.log(id)
        var user = await User.findById(id)
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(user)
}

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
        var user = await User.findByIdAndUpdate(id, { username, password })
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(user)
}

userCtrl.deletUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        var user = await User.findByIdAndDelete(id)
    } catch (error) {
        return res.status(500).send(error)
    }
    return res.status(200).send(user)
}

module.exports = userCtrl;