const { getRawMaterialsController } = require("../../controllers/rawMaterials");
const { getRawMaterialsValidator } = require("../../validation/rawMaterials");
const validator = require("express-joi-validation").createValidator({});
const handle = require("express-async-handler");

module.exports = [
  validator.query(getRawMaterialsValidator),
  handle(getRawMaterialsController),
];
