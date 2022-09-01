const router = require("express").Router();
router.get("/", require("./appController"));

module.exports = router;