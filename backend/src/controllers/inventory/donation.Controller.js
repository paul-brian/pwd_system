const Donation = require("../../models/inventory/donationModel");

exports.getAll = (req, res) => {
  Donation.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  Donation.create(req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Donation recorded successfully" });
  });
};