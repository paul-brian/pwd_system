const Distribution = require("../../models/inventory/distributionModel");

exports.getAll = (req, res) => {
  Distribution.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  Distribution.create(req.body, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: "Assistance released successfully" });
  });
};

exports.getByUser = (req, res) => {
  Distribution.getByUser(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getMyAssistance = (req, res) => {
  Distribution.getMyAssistance(req.user.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
