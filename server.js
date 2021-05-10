const express = require("express");
const path = require("path");
const app = express();
 
const PORT = process.env.PORT || 3001;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
 
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client/build/index.html"));
});
 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");
 
mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/DetailedByAlan",
   {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true,
   }
 );
 
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
 });
 app.get("/api/config", (req, res) => {
  res.json({ success: true });
 });
 connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
 });
 