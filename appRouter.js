const router = require("express").Router();
router.get("/", require("./appController"));
router.get("/about", require("./appController"));

module.exports = router;