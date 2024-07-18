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
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [
        deck.name,
      ]
    );

    return result.insertId;
  }

  async update(deck) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name=? WHERE id=?`,
      [
        deck.name,
        deck.id,
      ]
    );
    return result.affectedRows;
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
