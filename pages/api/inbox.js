const faker = require("faker");

export default (req, res) => {
  res.statusCode = 200;

  const data = {
    chats: {},
  };

  res.json(data);
};
