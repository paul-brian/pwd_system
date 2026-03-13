// const db = require("../../config/db");


// // ✅ READ attendance (AUTO ABSENT)
// exports.getEventAttendance = (req, res) => {
//   const { eventId } = req.params;

//   const sql = `
//     SELECT 
//       p.pwd_id,
//       u.full_name,
//       COALESCE(a.status, 'absent') AS status
//     FROM pwd_profiles p
//     JOIN user u ON u.user_id = p.user_id
//     LEFT JOIN event_attendance a
//       ON p.pwd_id = a.pwd_id
//       AND a.event_id = ?
//     ORDER BY u.full_name ASC
//   `;

//   db.query(sql, [eventId], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// };



// // ✅ CREATE / UPDATE attendance (UPSERT)
// exports.markAttendance = (req, res) => {
//   const { event_id, pwd_id, status } = req.body;

//   const sql = `
//     INSERT INTO event_attendance (event_id, pwd_id, status)
//     VALUES (?, ?, ?)
//     ON DUPLICATE KEY UPDATE status=?
//   `;

//   db.query(
//     sql,
//     [event_id, pwd_id, status, status],
//     (err) => {
//       if (err) return res.status(500).json(err);
//       res.json({ message: "Attendance updated" });
//     }
//   );
// };



// // ✅ DELETE single attendance record
// exports.deleteAttendance = (req, res) => {
//   const { eventId, pwdId } = req.params;

//   const sql = `
//     DELETE FROM event_attendance
//     WHERE event_id=? AND pwd_id=?
//   `;

//   db.query(sql, [eventId, pwdId], (err) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Attendance removed" });
//   });
// };



// // ✅ RESET EVENT ATTENDANCE (VERY USEFUL)
// exports.resetAttendance = (req, res) => {
//   const { eventId } = req.params;

//   db.query(
//     "DELETE FROM event_attendance WHERE event_id=?",
//     [eventId],
//     (err) => {
//       if (err) return res.status(500).json(err);
//       res.json({ message: "Attendance reset" });
//     }
//   );
// };

const db = require("../../config/db");

// READ attendance (only active users)
exports.getEventAttendance = (req, res) => {
  const { eventId } = req.params;

  const sql = `
    SELECT 
      p.pwd_id,
      u.full_name,
      COALESCE(a.status, 'absent') AS status
    FROM pwd_profiles p
    JOIN user u ON u.user_id = p.user_id
    LEFT JOIN event_attendance a
      ON p.pwd_id = a.pwd_id
      AND a.event_id = ?
    WHERE u.status='active'
    ORDER BY u.full_name ASC
  `;

  db.query(sql, [eventId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// CREATE/UPDATE attendance (UPSERT)
exports.markAttendance = (req, res) => {
  const { event_id, pwd_id, status } = req.body;

  // check if user is active
  const checkSql = `
    SELECT u.status
    FROM pwd_profiles p
    JOIN user u ON u.user_id = p.user_id
    WHERE p.pwd_id = ?
  `;

  db.query(checkSql, [pwd_id], (err, rows) => {
    if (err) return res.status(500).json(err);
    if (!rows.length || rows[0].status !== "active") {
      return res.status(400).json({ message: "Inactive or not found user" });
    }

    const sql = `
      INSERT INTO event_attendance (event_id, pwd_id, status)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE status=?
    `;

    db.query(sql, [event_id, pwd_id, status, status], (err2) => {
      if (err2) return res.status(500).json(err2);
      res.json({ message: "Attendance updated" });
    });
  });
};

exports.getMyAttendance = (req, res) => {
  const userId = req.user.id;

const sql = `
  SELECT 
    a.attendance_id,
    a.status,
    a.check_in_time,
    e.event_name,        
    e.event_date,
    e.location
  FROM event_attendance a
  JOIN events e ON a.event_id = e.event_id
  JOIN pwd_profiles p ON a.pwd_id = p.pwd_id
  WHERE p.user_id = ?
  ORDER BY e.event_date DESC
`;

  db.query(sql, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};