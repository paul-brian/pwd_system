const db = require("../../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM inventory_items", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM inventory_items WHERE inventory_id = ?", [id], callback);
};

exports.create = (data, callback) => {
  const { item_name, category, quantity, unit } = data;
  db.query(
    `INSERT INTO inventory_items (item_name, category, quantity, unit)
     VALUES (?,?,?,?)`,
    [item_name, category, quantity, unit],
    callback
  );
};

exports.update = (id, data, callback) => {
  const { item_name, category, quantity, unit } = data;
  db.query(
    `UPDATE inventory_items
     SET item_name=?, category=?, quantity=?, unit=?
     WHERE inventory_id=?`,
    [item_name, category, quantity, unit, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM inventory_items WHERE inventory_id = ?", [id], callback);
};