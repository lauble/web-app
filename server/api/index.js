const router = require("express").Router();

// routes go here
// ex: router.use('./main', require('./main))

router.use((req, res, next) => {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
  });
  
  module.exports = router;