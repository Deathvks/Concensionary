const db = require("../models");
const Concensionary = db.concensionary;

exports.create = (req, res) => {
    const car = {
        brand: req.body.brand,
        model: req.body.model,
        power: req.body.power
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
    const id = req.params.id;

  Concensionary.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Car was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update car with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating car with id=" + id
      });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

  Concensionary.destroy({ where: { id: id } }).then(() => {
    console.log("all its delete");
    res.send({ message: "deleted" });
  });
}