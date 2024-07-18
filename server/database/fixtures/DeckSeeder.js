const AbstractSeeder = require("./AbstractSeeder");

class DeckSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "deck", truncate: true });
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeDeck = {
        name: "Nom du deck", 
        isShared: 0,
      };

      this.insert(fakeDeck);
    }
  }
}

module.exports = DeckSeeder;
