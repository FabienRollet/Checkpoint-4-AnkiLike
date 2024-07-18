const AbstractSeeder = require("./AbstractSeeder");

class CardSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "card", truncate: true });
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeCard = {
        question: "Ceci est une question", 
        question_media:"https://ih1.redbubble.net/image.1397640580.9061/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        answer: "Ceci est une réponse",
        answer_media:"https://i.kym-cdn.com/entries/icons/facebook/000/006/077/so_good.jpg",
        study_date:'2024-07-19',
        level:3,
      };

      this.insert(fakeCard);
    }
  }
}

// Export the UserSeeder class
module.exports = CardSeeder;
