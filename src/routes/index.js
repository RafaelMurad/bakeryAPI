const rawMaterials = require("./rawMaterials");
const express = require("express");

const router = express.Router();

router.post("/rawMaterials", ...rawMaterials.addRawMaterials);

module.exports = router;
