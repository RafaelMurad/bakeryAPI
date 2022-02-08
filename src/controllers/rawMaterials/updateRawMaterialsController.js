const { findOne, updateOne, insertOne } = require("../../helpers/db");
const ObjectId = require("mongodb").ObjectId;

async function updateRawMaterials(req, res) {
  try {
    const id = req.params.id;
    const { quantity, user } = req.body;

    const rawMaterials = await findOne("rawMaterials", { _id: ObjectId(id) });
    if (!rawMaterials) {
      return res.status(404).json({
        error: "Raw Material not found",
      });
    }

    if (rawMaterials.quantity >= quantity) {
      try {
        await updateOne("rawMaterials", {
          query: { _id: ObjectId(id) },
          update: { $inc: { quantity: -quantity } },
        });

        try {
          await insertOne("transactions", {
            materialId: new ObjectId(id),
            name: rawMaterials.name,
            quantity: quantity,
            user: user,
            createdAt: new Date(),
          });
        } catch (err) {
          return res.status(206).json({
            withdraw: true,
            transaction: false,
            error: "Error while updating transaction",
          });
        }
      } catch (error) {
        return res.status(500).json({
          withdraw: false,
          transaction: false,
          error: "Error while updating raw material",
        });
      }

      const updatedRawMaterials = await findOne("rawMaterials", {
        _id: ObjectId(id),
      });

      return res.status(200).json({
        ...updatedRawMaterials,
      });
    } else {
      return res.status(409).json({
        error: "Raw Material quantity is not enough",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = updateRawMaterials;
