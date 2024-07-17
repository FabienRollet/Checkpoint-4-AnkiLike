const express = require("express");

const router = express.Router();

const deck  = require("../../../controllers/deckAction");

router.get("/", deck.browse);
router.get("/:id", deck.read);
router.post("/", deck.add);

module.exports = router;
