const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const watchListRouter = require('./watchlist.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/watchlist', watchListRouter)

module.exports = router;
