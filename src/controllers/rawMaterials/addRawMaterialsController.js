const { insertOne, findOne, updateOne } = require("../../helpers/db");

async function addRawMaterials(req, res) {
  try {
    const { name, quantity, user } = req.body;
    const rawMaterialExists = await findOne("rawMaterials", { name });

    if (rawMaterialExists) {
      const rawMaterialExists = await updateOne("rawMaterials", {
        query: { name },
        update: {
          $inc: { quantity: quantity },
          $set: { user: user },
        },
      });
      return res.status(200).json(rawMaterialExists);
    }

    const rawMaterial = await insertOne("rawMaterials", {
      name,
      quantity,
      user,
    });

    return res.status(201).json(rawMaterial);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = addRawMaterials;
