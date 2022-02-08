const { findOne, updateOne, insertOne } = require("../../helpers/db");
const ObjectId = require("mongodb").ObjectId;

async function updateRawMaterials(req, res) {
  const id = req.params.id;
  const { quantity, user } = req.body;

  const rawMaterials = await findOne("rawMaterials", { _id: ObjectId(id) });
  if (!rawMaterials) {
    return res.status(404).json({
      error: "Raw Material not found",
    });
  }
  if (rawMaterials.quantity >= quantity) {
    await updateOne("rawMaterials", {
      query: { _id: ObjectId(id) },
      update: { $inc: { quantity: -quantity } },
    });

    await insertOne("transactions", {
      materialId: new ObjectId(id),
      name: rawMaterials.name,
      quantity: quantity,
      user: user,
      createdAt: new Date(),
    });

    return res.status(200).json({
      message: "Raw Material updated successfully",
    });
  } else {
    return res.status(409).json({
      error: "Raw Material quantity is not enough",
    });
  }
}

module.exports = updateRawMaterials;
