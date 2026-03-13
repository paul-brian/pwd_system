const db = require("../../config/db");

exports.getAll = (callback) => {
  db.query(`
    SELECT ad.*, i.item_name, u.full_name
    FROM assistance_distribution ad
    JOIN inventory_items i ON ad.item_id = i.inventory_id
    JOIN pwd_profiles p ON ad.beneficiary_id = p.pwd_id
    JOIN user u ON p.user_id = u.user_id
  `, callback);
};

exports.create = (data, callback) => {
  const { beneficiary_id, item_id, quantity, release_date, remarks } = data;

  db.query(
    "SELECT quantity FROM inventory_items WHERE inventory_id = ?",
    [item_id],
    (err, results) => {
      if (err) return callback(err);
      if (results[0].quantity < quantity) {
        return callback(new Error("Not enough stock"));
      }
      db.query(
        `INSERT INTO assistance_distribution
         (beneficiary_id, item_id, quantity, release_date, remarks)
         VALUES (?,?,?,?,?)`,
        [beneficiary_id, item_id, quantity, release_date, remarks],
        (err) => {
          if (err) return callback(err);
          db.query(
            "UPDATE inventory_items SET quantity = quantity - ? WHERE inventory_id = ?",
            [quantity, item_id],
            callback
          );
        }
      );
    }
  );
};

exports.getByUser = (id, callback) => {
  db.query(`
    SELECT ad.*, i.item_name
    FROM assistance_distribution ad
    JOIN inventory_items i ON ad.item_id = i.inventory_id
    WHERE ad.beneficiary_id = ?
    ORDER BY ad.release_date DESC
  `, [id], callback);
};

exports.getMyAssistance = (userId, callback) => {
  const sql = `
    SELECT 
      ad.assistance_id,
      ad.quantity,
      ad.release_date,
      ad.remarks,
      ad.created_at,
      i.item_name,
      i.category
    FROM assistance_distribution ad
    JOIN inventory_items i ON ad.item_id = i.inventory_id
    JOIN pwd_profiles p ON ad.beneficiary_id = p.pwd_id
    WHERE p.user_id = ?
    ORDER BY ad.release_date DESC
  `;
  db.query(sql, [userId], callback);
};