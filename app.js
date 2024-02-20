let express = require("express");
// console.log(express()); // an app object is returned which is an instance of the express-app and this object contains all the necessary methods to manage our app.

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/chat-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
// import routes
const userAuthRouter = require("./routes/user-auth");
const userProfileRouter = require("./routes/user-profile");
const notificationRouter = require("./routes/notification");
const messageRouter = require("./routes/message");
const chatroomRouter = require("./routes/chat-room");
const usersRouter = require("./routes/users");


let app = express();
// console.log(typeof app); //function (object)

app.use("/user-auth", userAuthRouter);
app.use("/user-profile", userProfileRouter);
app.use("/notification", notificationRouter);
app.use("/message", messageRouter);
app.use("/chat-room", chatroomRouter);
app.use("/users", usersRouter);


let port = 3000;
app.get("/", (req, res) => {
  res.send({
    message: "Welcome! Here we have the server ready to use",
  });
});

// Listening to requests defined above :)
app.listen(port, () => {
  console.log("Started listening to the", port, " port");
});
