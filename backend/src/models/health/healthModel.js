const db = require("../../config/db");

const Health = {

  getAll: (callback) => {
    db.query("SELECT * FROM health_records", callback);
  },

  getByPwd: (pwd_id, callback) => {
    db.query(
      "SELECT * FROM health_records WHERE pwd_id = ?",
      [pwd_id],
      callback
    );
  },

  create: (data, callback) => {
    const sql = `
      INSERT INTO health_records
      (pwd_id, blood_pressure, heart_rate, temperature, weight, blood_sugar, remarks, health_status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      data.pwd_id,
      data.blood_pressure,
      data.heart_rate,
      data.temperature,
      data.weight,
      data.blood_sugar,
      data.remarks,
      data.health_status
    ], callback);
  },

  update: (id, data, callback) => {
    const sql = `
      UPDATE health_records
      SET blood_pressure=?, heart_rate=?, temperature=?, weight=?, blood_sugar=?, remarks=?, health_status=?
      WHERE health_id=?
    `;

    db.query(sql, [
      data.blood_pressure,
      data.heart_rate,
      data.temperature,
      data.weight,
      data.blood_sugar,
      data.remarks,
      data.health_status,
      id
    ], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM health_records WHERE health_id=?", [id], callback);
  },

  
  getMyHealth: (userId, callback) => {
    const sql = `
      SELECT h.* FROM health_records h
      JOIN pwd_profiles p ON h.pwd_id = p.pwd_id
      WHERE p.user_id = ?
      ORDER BY h.recorded_at DESC
    `;
    db.query(sql, [userId], callback);
  },

};

module.exports = Health;