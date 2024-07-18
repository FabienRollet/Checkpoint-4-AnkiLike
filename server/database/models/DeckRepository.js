const AbstractRepository = require("./AbstractRepository");

class DeckRepository extends AbstractRepository {
  constructor() {
    super({ table: "deck" });
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async create(deck) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, isShared, user_id) VALUES (?,?,?)`,
      [
        deck.name,
        deck.isShared,
        deck.user_id
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

module.exports = DeckRepository;
