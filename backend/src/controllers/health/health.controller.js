const Health = require("../../models/health/healthModel");

exports.getAllHealth = (req, res) => {
  Health.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getHealthByPwd = (req, res) => {
  const { pwd_id } = req.params;

  Health.getByPwd(pwd_id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createHealth = (req, res) => {
    console.log("Request body:", req.body);
  Health.create(req.body, (err, result) => {
    console.error("DB Error:", err);
    if (err) return res.status(500).json(err);
    res.json({ message: "Health record created", id: result.insertId });
  });
};

exports.updateHealth = (req, res) => {
  const { id } = req.params;

  Health.update(id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Health record updated" });
  });
};

exports.deleteHealth = (req, res) => {
  const { id } = req.params;

  Health.delete(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Health record deleted" });
  });
};

exports.getMyHealth = (req, res) => {
  const userId = req.user.id;
  Health.getMyHealth(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};