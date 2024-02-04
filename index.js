const express = require("express");
require('dotenv').config();
const cors = require("cors");

//set routes here
const userRoutes = require("./routes/user-routes.js");
const enjoysRoutes = require("./routes/enjoys-routes.js");
const palominosRoutes = require("./routes/palominos-routes.js");

const app = express();
const PORT = process.env.PORT || 5050;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(express.json())
app.use(cors({ origin: CORS_ORIGIN }));
app.use(`/user`, userRoutes);
app.use(`/enjoys`, enjoysRoutes);
app.use(`/palominos`, palominosRoutes)

app.get("/", (req, res) => {
	res.send("Welcome to InStock API!");
});

app.listen(PORT, (req, res) => {
	console.log(`Server running at port: ${PORT}`);
});
