const { findOne, findMany } = require("../../helpers/db");

async function getRawMaterials(req, res) {
  try {
    if (req.query.name) {
      const rawMaterials = await findMany("rawMaterials", {
        name: { $regex: req.query.name, $options: "i" },
      });
      return res.status(200).json(rawMaterials);
    }

    const rawMaterials = await findMany("transactions", {
      user: req.query.user,
    });

    return res.status(200).json(rawMaterials);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
}

module.exports = getRawMaterials;
