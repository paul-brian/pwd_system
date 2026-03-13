const db = require("../../config/db");

const PWD = {

  create: (data, callback) => {
    const {
      user_id,
      pwd_number,
      disability_type,
      medical_condition,
      birth_date,
      gender,
      address,
      contact_number,
      emergency_contact,
      status,
      created_at
    } = data;

    const sql = `
      INSERT INTO pwd_profiles
      (user_id, pwd_number, disability_type, medical_condition, birth_date, gender, address, contact_number, emergency_contact, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      user_id,
      pwd_number,
      disability_type,
      medical_condition,
      birth_date,
      gender,
      address,
      contact_number,
      emergency_contact,
      status,
      created_at
    ], callback);
  },

  getAll: (callback) => {
    // Return columns aliased to match frontend expectations
    const sql = `
      SELECT
        p.pwd_id,
        p.pwd_number,
        u.full_name,
        p.disability_type,
        p.medical_condition,
        p.birth_date,
        p.gender,
        p.address,
        p.contact_number,
        p.emergency_contact,
        p.status,
        p.created_at
      FROM pwd_profiles p
      JOIN user u ON p.user_id = u.user_id
    `;

    db.query(sql, callback);
  },

  delete: (id, callback) => {
    const sql = `UPDATE pwd_profiles SET status='inactive' WHERE pwd_id=?`;
    db.query(sql, [id], callback);
  },

  update: (id, data, callback) => {
  const {
    full_name,
    pwd_number,
    disability_type,
    medical_condition,
    birth_date,
    gender,
    address,
    contact_number,
    emergency_contact,
    status
  } = data;

  const pwdSql = `
    UPDATE pwd_profiles
    SET pwd_number=?, disability_type=?, medical_condition=?, birth_date=?, gender=?, 
        address=?, contact_number=?, emergency_contact=?, status=?
    WHERE pwd_id=?
  `;

  db.query(pwdSql, [
    pwd_number,
    disability_type,
    medical_condition,
    birth_date,
    gender,
    address,
    contact_number,
    emergency_contact,
    status,
    id
  ], (err) => {
    if (err) return callback(err);

    const getUserSql = "SELECT user_id FROM pwd_profiles WHERE pwd_id=?";
    db.query(getUserSql, [id], (err2, rows) => {
      if (err2) return callback(err2);
      if (!rows.length) return callback(null);

      const userId = rows[0].user_id;
      const userSql = "UPDATE user SET full_name=? WHERE user_id=?";
      db.query(userSql, [full_name, userId], callback);
    });
  });
},
};

module.exports = PWD;

