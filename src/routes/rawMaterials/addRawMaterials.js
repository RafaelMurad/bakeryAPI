const { addRawMaterialsController } = require("../../controllers/rawMaterials");
const { addRawMaterialsValidator } = require("../../validation/rawMaterials");
const validator = require("express-joi-validation").createValidator({});
const handle = require("express-async-handler");

module.exports = [
  validator.body(addRawMaterialsValidator),
  handle(addRawMaterialsController),
];
