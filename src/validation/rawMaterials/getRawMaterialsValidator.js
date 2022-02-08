const Joi = require("joi");

const getRawMaterialsValidator = Joi.object()
  .keys({
    name: Joi.any(),
    user: Joi.any(),
  })
  .xor("name", "user");

module.exports = getRawMaterialsValidator;
