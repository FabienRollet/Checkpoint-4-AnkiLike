const express = require("express");

const router = express.Router();

const user  = require("../../../controllers/userAction");

router.get("/", user.browse);
router.get("/:id", user.read);
router.post("/", user.add);

module.exports = router;
