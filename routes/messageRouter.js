const { Router } = require("express");
const { getMessageById } = require("../controllers/MessageController.js");

const messageRouter = Router();

messageRouter.get("/:messageId", getMessageById)

module.exports = { messageRouter };