const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { History } = db;

router.get(
  "/",
  authenticated,
  asyncHandler(async (req, res) => {
    const history = await History.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.json( history );
  })
);

router.post(
    "/",
    authenticated,
    asyncHandler(async (req, res) => {
      const { deposit, stockSymbol, stockName, boughtPrice, soldPrice, shares} = req.body;
      const transaction = await History.create({ deposit, stockSymbol, stockName, boughtPrice, soldPrice, shares, userId: req.user.id });
      res.json({ transaction });
    })
  );

router.get(
  "/:id",
  authenticated,
  asyncHandler(async function (req, res) {
    const stock = await Watchlist.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(stock);
  })
);



module.exports = router;
