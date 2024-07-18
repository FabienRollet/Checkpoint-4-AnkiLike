const tables = require("../../database/tables");

const browse = async (res, next) => {
  try {
    const deck = await tables.deck.readAll();
    res.json(deck);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const deck = req.body;
  try {
    const insertId = await tables.deck.create(deck);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.deck.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};


module.exports = {
  browse,
  add,
  destroy,
};
