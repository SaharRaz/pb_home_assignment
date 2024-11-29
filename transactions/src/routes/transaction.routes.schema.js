const Joi = require('joi');

const transactionSchema = Joi.object({
    from: Joi.string().required(),
    to: Joi.string().required(),
    amount: Joi.number().positive().required(),
});

module.exports = {
    transactionSchema,
};
