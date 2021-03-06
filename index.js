const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const areeba = require("./routes/api/areeba");
const transactions = require("./routes/api/transactions");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/areeba", areeba);
app.use("/api/transactions", transactions);

app.listen(port, "0.0.0.0");
