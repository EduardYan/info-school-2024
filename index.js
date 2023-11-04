const express = require("express");
const {START_CONFIG} = require("./src/settings/start")
const path = require("path")
const morgan = require("morgan")
require("ejs")

const app = express()

//settings
app.set("port", process.env.PORT || START_CONFIG.PORT)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/src/views"))

//routes
const routes = require("./src/routes/principals")
app.use(routes)

//middleware
app.use(morgan("dev"));

//paths
app.use("/public", express.static(path.join(__dirname, "src/public")))

//running
app.listen(app.get("port"), '0.0.0.0')
console.log(`Server started in port ${app.get("port")}`)