const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8081;
const connectDB = require("./config/database");
connectDB();

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// send hello
app.get("/", (req, res) => res.send("Welcome to blood search API"));
app.use("/v1/api/blood", require("./routes/bloodRoutes"));
app.use("/v1/api/receive", require("./routes/receiveRoutes"));

app.use("/v1/api/users", require("./routes/userRoutes"));

//Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
  });
} else{
    app.get("/", (req, res) => res.send('Please set to production.'))
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
