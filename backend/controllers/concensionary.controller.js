const db = require("../models");
const Concensionary = db.concensionary;

exports.create = (req, res) => {
    const car = {
        brand: req.body.brand,
        model: req.body.model
    }

    Concensionary.create(car).then((data) => {
        res.send(data);
    });
}

exports.findAll = (req, res) => {
    Concensionary.findAll().then((data) => {
        res.send(data);
    });
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    const id = req.params.id;

  Concensionary.destroy({ where: { id: id } }).then(() => {
    console.log("all its delete");
    res.send({ message: "deleted" });
  });
}