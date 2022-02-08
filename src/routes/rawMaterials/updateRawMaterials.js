const {
  updateRawMaterialsController,
} = require("../../controllers/rawMaterials");
const {
  updateRawMaterialsValidator: {
    updateRawMaterialsParamValidator,
    updateRawMaterialsBodyValidator,
  },
} = require("../../validation/rawMaterials");
const validator = require("express-joi-validation").createValidator({});
const handle = require("express-async-handler");

module.exports = [
  validator.params(updateRawMaterialsParamValidator),
  validator.body(updateRawMaterialsBodyValidator),
  handle(updateRawMaterialsController),
];
