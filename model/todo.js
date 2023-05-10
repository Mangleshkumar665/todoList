// schema
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String }, 
  complete :{type:Boolean, default:false},
  editToggle :{type:Boolean, default:false},
  deleteToggle :{type:Boolean, default:false}



});

// modal of schema

exports.Todo = mongoose.model("Todo", todoSchema);
