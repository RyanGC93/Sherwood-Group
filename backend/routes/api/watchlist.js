const { requireAuth } = require('../../utils/auth');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const db = require('../../db/models');
const {Watchlists} = db;

 

// router.get("/", requireAuth, asyncHandler(async (req, res) =>{
//     const {load} = await Watchlists.findAll()
//        res.JSON({load})
    
//   })
// );

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const watchedStocks = await Watchlists.findAll({
      where: {userId: req.user.id},
    });
    res.json( watchedStocks );
  })
);

router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
      const { watchlist_name } = req.body;
      const watchedStock = await Watchlists.create({ watchlist_name, userId: req.user.id });
      res.json({ watchedStock });
    })
  );

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const watchedStock = await Watchlists.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(watchedStock);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const watchedStock = await Watchlists.findOne({
      where: {
        id: req.params.id,
      },
    });
   
    if (watchedStock) {
      await watchedStock.destroy();
      res.json({ message: `Deleted  stock with id of ${req.params.id}.` });
    } else {
      console.error(' stock not found')
    }
  })
);

module.exports = router;
