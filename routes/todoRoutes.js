const express = require("express")
const router = express.Router();

const todoController = require("../controller/todos");

router
  .get("/", todoController.getAllItems)
  .get("/:id", todoController.getItem)
  .post("/", todoController.insertItem)
  .put("/:id", todoController.replaceItem)
  .patch("/:id", todoController.updateItem)
  .delete("/:id", todoController.deleteItem);

  exports.router = router ; 