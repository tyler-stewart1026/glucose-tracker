const db = require("../models");

// Defining methods for the glucoseController
module.exports = {
  find: function(req, res) {
<<<<<<< HEAD
    db.Glucose
      // .find({"date": {"gte": new Date(req.query), "$lt": new Date(2020, 01, 29)}})
      .find({"date": {"$gt": new Date(req.params.date), "$lt": new Date(2020, 20, 2)}})
      // .sort({ date: -1 })
=======
    db.Glucose.find({
      date: {
        $gte: new Date(req.params.date).setHours(00, 00, 00),
        $lt: new Date(req.params.date).setHours(23, 59, 59)
      }
    })
      .sort({ date: -1 })
>>>>>>> development
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Glucose.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Glucose.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Glucose.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Glucose.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Glucose.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
