const express = require("express");
require('dotenv').config();
const cors = require("cors");

//set routes here
const userRoutes = require("./routes/user-routes.js");
// const postRoutes = require("./routes/post-routes.js");

const app = express();
const PORT = process.env.PORT || 5050;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const API_PREFIX = '/api'

app.use(express.json())
app.use(cors({ origin: CORS_ORIGIN }));
app.use(`${API_PREFIX}/user`, userRoutes);

app.get("/", (req, res) => {
	res.send("Welcome to InStock API!");
});

app.listen(PORT, (req, res) => {
	console.log(`Server running at port: ${PORT}`);
});
