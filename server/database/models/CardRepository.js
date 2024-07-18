const AbstractRepository = require("./AbstractRepository");

class CardRepository extends AbstractRepository {
  constructor() {
    super({ table: "card" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(card) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET question=?, question_media=?, answer=?, answer_media=? WHERE id=?`,
      [
        card.question,
        card.question_media,
        card.answer,
        card.answer_media,
        card.id,
      ]
    );

    return result.affectedRows;
  }

  async create(card) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (question, question_media, answer, answer_media, study_date, level, deck_id) VALUES (?,?,?,?,CURDATE(),0, ?)`,
      [
        card.question,
        card.question_media,
        card.answer,
        card.answer_media,
        card.deck_id
      ]
    );

    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = CardRepository;
