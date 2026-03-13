const db = require("../../config/db");
const bcrypt = require("bcrypt");

// ---------------------------
// Submit Request Access
// ---------------------------
exports.submitRequest = (req, res) => {
  const { full_name, email, role, reason } = req.body;

  if (!full_name || !email || !role || !reason)
    return res.status(400).json({ Error: "All fields are required" });

  const sql = `INSERT INTO request_access (full_name, email, role, reason, status, created_at)
               VALUES (?, ?, ?, ?, 'pending', NOW())`;

  db.query(sql, [full_name, email, role, reason], (err, result) => {
    if (err) return res.status(500).json({ Error: "Duplicate gmail found" });
    res.json({ Status: "Request submitted", requestId: result.insertId });
  });
};

// ---------------------------
// List Pending Requests (Admin)
// ---------------------------
exports.listRequests = (req, res) => {
  const sql = `SELECT * FROM request_access ORDER BY 
  CASE 
    WHEN status='pending' THEN 1
    WHEN status='approved' THEN 2
    WHEN status='rejected' THEN 3
  END, created_at DESC`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ Error: "Server error" });
    res.json(results);
  });
};

// ---------------------------
// Approve Request (Admin)
// ---------------------------
exports.approveRequest = async (req, res) => {
  const { requestId } = req.params;

  // Get request data
  db.query(`SELECT * FROM request_access WHERE request_id = ?`, [requestId], async (err, results) => {
    if (err) return res.status(500).json({ Error: "Server error" });
    if (results.length === 0) return res.status(404).json({ Error: "Request not found" });

    const request = results[0];

    // Create user account (temporary plain password: 123456)
    const password = await bcrypt.hash("123456", 10); // hashed password
    const sqlInsert = `INSERT INTO user (full_name, email, password, role, status, created_at)
                       VALUES (?, ?, ?, ?, 'active', NOW())`;
    db.query(sqlInsert, [request.full_name, request.email, password, request.role], (err2, result2) => {
      if (err2) return res.status(500).json({ Error: "Error creating user" });

      // Update request status
      db.query(`UPDATE request_access SET status='approved' WHERE request_id=?`, [requestId], (err3) => {
        if (err3) return res.status(500).json({ Error: "Error updating request status" });
        res.json({ Status: "Request approved and user created" });
      });
    });
  });
};


// Reject Request (Admin)

exports.rejectRequest = (req, res) => {
  const { requestId } = req.params;
  db.query(`UPDATE request_access SET status='rejected' WHERE request_id=?`, [requestId], (err) => {
    if (err) return res.status(500).json({ Error: "Error rejecting request" });
    res.json({ Status: "Request rejected" });
  });
};