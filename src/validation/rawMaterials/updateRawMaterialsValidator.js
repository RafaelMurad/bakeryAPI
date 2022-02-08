const Joi = require("joi");

const updateRawMaterialsParamValidator = Joi.object({
  id: Joi.string().required(),
}).required();

const updateRawMaterialsBodyValidator = Joi.object({
  quantity: Joi.number().greater(0).required(),
  user: Joi.string().required(),
});

module.exports = {
  updateRawMaterialsParamValidator,
  updateRawMaterialsBodyValidator,
};
