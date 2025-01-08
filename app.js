const express = require("express");
const messageDb = require("./db.js");
const { messageRouter } = require("./routes/messageRouter.js");
const path = require("node:path");
const PORT = 3000;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", { messages: messageDb.getAll() });
});

app.post("/new", (req, res) => {
    const newMessage = { ...req.body, added: new Date(), id: crypto.randomUUID(), }
    messageDb.addNew(newMessage);
    res.redirect("/");
});

app.use("/message", messageRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});