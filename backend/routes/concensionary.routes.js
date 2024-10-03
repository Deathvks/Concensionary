module.exports = app => {
    const concensionary = require("../controllers/concensionary.controller.js");

    var router = require("express").Router();

    router.post("/", concensionary.create);

    router.put("/", concensionary.update);

    router.get("/", concensionary.findAll);

    router.delete("/:id", concensionary.delete);

    app.use("/api/concensionary", router);
};