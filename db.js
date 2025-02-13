const { randomID } = require("./helper.js");

function messageDb() {
  const db = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      id: randomID(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      id: randomID(),
    }
  ];

  const getAll = () => structuredClone(db);
  const addNew = (message) => db.push(message);
  const getById = (id) => db.find((message) => message.id === id);

  return {
    getAll: getAll,
    addNew: addNew,
    getById: getById,
  };
};

module.exports = messageDb();