const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    balance: Joi.number().min(0).required(),
});

module.exports = {
    userSchema,
};
