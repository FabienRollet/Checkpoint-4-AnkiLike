// const AbstractSeeder = require("./AbstractSeeder");
// const CardSeeder = require("./CardSeeder");
// const DeckSeeder = require("./DeckSeeder");

// class DeckCardSeeder extends AbstractSeeder {
//   constructor() {
//     super({
//       table: "deck_card",
//       truncate: true,
//       dependencies: [CardSeeder, DeckSeeder],
//     });
//   }

//   run() {
//     for (let i = 0; i < 2; i += 1) {
//       const fakeDeckCard = {
//         deck_id: 2,
//         card_id: 1
//       };

//       this.insert(fakeDeckCard);
//     }
//   }
// }

// module.exports = DeckCardSeeder;
