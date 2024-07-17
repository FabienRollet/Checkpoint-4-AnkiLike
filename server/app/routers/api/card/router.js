const express = require("express");

const router = express.Router();

const card  = require("../../../controllers/cardAction");

router.get("/", card.browse);
router.get("/:id", card.read);
router.put("/:id", card.edit);
router.post("/", card.add);
router.delete("/:id", card.destroy);

module.exports = router;
