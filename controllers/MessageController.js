const messageDb = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

const getMessageById = (req, res) => {
    const { messageId } = req.params;
    const message = messageDb.getById(messageId);

    if (!message) throw new CustomNotFoundError("Message Not Found");
    res.render("detail", { message: message });
};

module.exports = { getMessageById };