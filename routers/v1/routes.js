const express = require('express');
const router = express.Router();

const userCtrl = require("../../controllers/user.controller")
const mscThesisCtrl = require("../../controllers/msc-thesis.controller")
const phdThesisCtrl = require("../../controllers/phd-thesis.controller")
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage });

router.post("/login",userCtrl.login);

router.post("/add-user",userCtrl.addUser);

router.get("/get-user",userCtrl.getUser);

router.get("/getUserById",userCtrl.getUserById);

router.put("/edit-user",userCtrl.editUser);

router.delete("/delete-user",userCtrl.deletUser);

router.post("/add-msc-thesis",upload.single('pdf'),mscThesisCtrl.addThesis);

router.get("/get-msc-thesis",mscThesisCtrl.getThesis);

module.exports = router;