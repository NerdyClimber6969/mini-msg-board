const crypto = require('crypto');

const randomID = () => crypto.randomBytes(20).toString('hex');

module.exports = { randomID };