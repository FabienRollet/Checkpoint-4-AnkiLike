const DeckRepository = require("./models/DeckRepository")
const CardRepository = require("./models/CardRepository")
const UserRepository = require("./models/UserRepository")

const tables = {};

tables.deck = new DeckRepository();
tables.card = new CardRepository();
tables.user = new UserRepository();


module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
