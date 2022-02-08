const rawMaterials = require("./rawMaterials");
const express = require("express");

const router = express.Router();

router.post("/rawMaterials", ...rawMaterials.addRawMaterials);
router.put("/rawMaterials/:id/request", ...rawMaterials.updateRawMaterials);
router.get("/rawMaterials", ...rawMaterials.getRawMaterials);

module.exports = router;
