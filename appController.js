const appController = (req, res) => {
    res.render("./home");
    res.render("./form")
};

/* appController("./form", (req, res)=> {
    res.render("form")
}) */

module.exports = appController;