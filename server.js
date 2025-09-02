const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Handle contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const entry = `Name: ${name}, Email: ${email}, Message: ${message}\n`;

  fs.appendFile("messages.txt", entry, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Something went wrong!");
    }
    res.send(`
      <h2>Thank you for contacting me, ${name}!</h2>
      <p>Your message has been received.</p>
      <a href="/">Go Back</a>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});