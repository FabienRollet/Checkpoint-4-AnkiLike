const express = require("express");

const router = express.Router();

const deck  = require("../../../controllers/deckAction");

router.get("/", deck.browse);
router.post("/", deck.add);
router.delete("/:id", deck.destroy);

module.exports = router;
