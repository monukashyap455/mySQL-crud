const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express()
app.use(express.json())
const bodyparser = require("body-parser");

const user =require("./routes/user");
// app.use(connection)
app.use(user)





const port = process.env.PORT
app.listen(port, () => console.log(`Server Start on port ${port}`));




