const express = require("express");

const server = express();
const services = require("./services");
const cors = require("cors");

server.use(express.json());

// get all routes and put under api , so you access all routes as host:port/api/routename
const port = process.env.PORT || 5000;

server.use(cors());
server.use("/api", services);

server.listen(port, () => {
  console.info("✅  Server is running on port " + port);
});

server.on("error", error => {
  console.error("❌ Error : server is not running :  " + error);
});
