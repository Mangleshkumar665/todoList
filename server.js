require('dotenv').config()

const express = require("express");
const app = express();
const port = process.env.PORT;

const cors = require('cors');

const morgan = require('morgan')
const productController = require("./controller/todos.js");
const todoRouter = require("./routes/todoRoutes.js")
const userRouter = require("./routes/userRoutes.js")

//database connections 

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoList');
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  console.log('database Connected Successfully ')
}






// body parser
app.use(cors());  // used in communication two different ie - one of backend at 8080 and one of react.. 

app.use(express.json());
app.use(morgan("default"));
app.use(express.static("public"));
app.use(express.static(process.env.PUBLIC_DIR))
app.use("/todos", todoRouter.router);
app.use("/users", userRouter.router);




app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
