const Joi = require("joi");

const addRawMaterialSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  user: Joi.string().required(),
});

module.exports = addRawMaterialSchema;
