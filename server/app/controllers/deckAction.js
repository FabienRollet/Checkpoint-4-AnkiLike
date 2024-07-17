const tables = require("../../database/tables");

const browse = async (res, next) => {
  try {
    const deck = await tables.deck.readAll();
    res.json(deck);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const deck = await tables.deck.read(req.params.id);
    if (deck == null) {
      res.sendStatus(404);
    } else {
      res.json(deck);
    }
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


module.exports = {
  browse,
  read,
  add,
};
