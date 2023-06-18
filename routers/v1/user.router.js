const express = require('express');
const router = express.Router();
const userCtrl = require("./../../controllers/user.controller")

router.post("/add-user",userCtrl.addUser);

router.get("/get-user-list",userCtrl.getUserList);

router.get("/get-user/:id",userCtrl.getUserById);

router.put("/edit-user/:id",userCtrl.editUser);

router.delete("/delete-user/:id",userCtrl.deletUser);

module.exports = router;