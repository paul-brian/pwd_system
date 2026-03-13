const db = require("../../config/db");
const bcrypt = require("bcrypt");

// List all users
exports.listUsers = (req, res) => {
  const sql = `SELECT user_id, full_name, email, role, status, image, created_at 
               FROM user 
               ORDER BY created_at DESC`;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ Error: "Server error" });
    res.json(results);
  });
};

// Edit user role
exports.editUser = (req, res) => {
  const { userId } = req.params;
  const { full_name, role, status } = req.body;

  const sql = `UPDATE user SET full_name=?, role=?, status=? WHERE user_id=?`;
  db.query(sql, [full_name, role, status, userId], (err) => {
    if (err) return res.status(500).json({ Error: "Error updating user" });

    const pwdSql = `UPDATE pwd_profiles SET status=? WHERE user_id=?`;
    db.query(pwdSql, [status, userId], (err2) => {
      if (err2) return res.status(500).json({ Error: "Error updating PWD status" });
      res.json({ Status: "User updated successfully" });
    });
  });
};

// Deactivate (or Activate) user
exports.toggleUserStatus = (req, res) => {
  const { userId } = req.params;
  const { status } = req.body;

  // ✅ I-update ang user table
  const sql = `UPDATE user SET status=? WHERE user_id=?`;
  db.query(sql, [status, userId], (err) => {
    if (err) return res.status(500).json({ Error: "Error updating status" });

    // ✅ I-propagate sa pwd_profiles kung may profile
    const pwdSql = `UPDATE pwd_profiles SET status=? WHERE user_id=?`;
    db.query(pwdSql, [status, userId], (err2) => {
      if (err2) return res.status(500).json({ Error: "Error updating PWD status" });
      res.json({ Status: `User ${status}` });
    });
  });
};