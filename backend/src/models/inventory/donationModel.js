const db = require("../../config/db");

exports.getAll = (callback) => {
  db.query(`
    SELECT d.*, i.item_name
    FROM donations d
    JOIN inventory_items i ON d.Item_id = i.inventory_id
  `, callback);
};

exports.create = (data, callback) => {
  const { donor_name, Item_id, quantity, donations_date, category } = data;

  db.query(
    `INSERT INTO donations
     (donor_name, Item_id, quantity, donations_date, category)
     VALUES (?,?,?,?,?)`,
    [donor_name, Item_id, quantity, donations_date, category || ""],
    (err) => {
      if (err) return callback(err);
      db.query(
        "UPDATE inventory_items SET quantity = quantity + ? WHERE inventory_id = ?",
        [quantity, Item_id],
        callback
      );
    }
  );
};