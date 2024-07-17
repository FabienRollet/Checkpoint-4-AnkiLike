const express = require("express");

const router = express.Router();

const cardRouter = require("./card/router");

router.use("/card", cardRouter);

const deckRouter = require("./deck/router");

router.use("/deck", deckRouter);

const userRouter = require("./user/router");

router.use("/user", userRouter);


module.exports = router;
