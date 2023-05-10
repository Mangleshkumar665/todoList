const express = require("express")
const router = express.Router();

const userController = require("../controller/users");
router
  .get("/", userController.getAllItems)
  .get("/:id", userController.getItem)
  .post("/", userController.insertItem)
  .put("/:id", userController.replaceItem)
  .patch("/:id", userController.updateItem)
  .delete("/:id", userController.deleteItem);

  exports.router = router ; 