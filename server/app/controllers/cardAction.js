const tables = require("../../database/tables");

const browse = async (res, next) => {
  try {
    const card = await tables.card.readAll();
    res.json(card);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const card = await tables.card.read(req.params.id);
    if (card == null) {
      res.sendStatus(404);
    } else {
      res.json(card);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const card = { ...req.body, id: req.params.id };
  try {
    await tables.card.update(card);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const card = req.body;
  try {
    const insertId = await tables.card.create(card);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.card.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
