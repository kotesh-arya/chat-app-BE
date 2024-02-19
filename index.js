let express = require("express");
// console.log(express()); // an app object is returned which is an instance of the express-app and this object contains all the necessary methods to manage our app

let app = express();
// console.log(typeof app); //function (object)

let port = 3000;
app.get("/message", (req, res) => {
  res.send({
    message: "Hello! welcome to the server",
  });
  console.log("accessing the messages route using GET request");
});
app.listen(port, () => {
  console.log("Started listening to the", port, " port");
});
