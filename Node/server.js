// server.js
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const login = require("./routes/login");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
// mongoose.connect('mongodb://localhost:27017/taskdb', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected--->>>>>>>>'))
//   .catch(err => console.log(err));

mongoose.connect("mongodb://127.0.0.1:27017/taskdb");

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/login", login);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
