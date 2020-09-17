import express from "express";

const app = express();

function consoleMiddleware(req, res, next) {
  console.log("I'm a middleware");
  next()
}

function protectedMiddleware(req, res, next) {
  res.redirect("/");
}

app.use(consoleMiddleware);

app.get("/about-us", function (req, res) {
  res.send("About Us.");
});

app.get("/contact", function (req, res) {
  res.send("Contact");
});

app.get("/protected", protectedMiddleware, function (req, res) {
  res.send("Protected");
});

app.get("/", function (req, res) {
  res.send("Home");
});

app.listen(() => console.log(`Listening!`));
