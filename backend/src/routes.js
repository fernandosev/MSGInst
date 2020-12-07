const express = require("express");
const multer = require("multer");
var jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  var token = req.headers["access-token"];
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "User not unauthorized" });

  jwt.verify(token, "@MSGInst#5587", function (err, decoded) {
    if (err)
      return res
        .status(401)
        .json({ auth: false, message: "User not unauthorized" });

    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
};

const UserController = require("./controllers/UserController");
const GroupController = require("./controllers/GroupController");
const { Router } = require("express");

const routes = express.Router();

// User
routes.post("/user/register", UserController.register);
routes.post("/user/signin", UserController.signin);

//Group
routes.post("/group/create", GroupController.create);
routes.post("/groups/my", GroupController.getMyGroups);
routes.post("/groups/another", GroupController.getAnotherGroups);
routes.post("/group/join", GroupController.join);

module.exports = routes;
