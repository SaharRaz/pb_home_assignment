const Joi = require('joi');

const groupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    members: Joi.array().items(Joi.string()).required(),
    balance: Joi.number().default(0),
});

module.exports = {
    groupSchema,
};
