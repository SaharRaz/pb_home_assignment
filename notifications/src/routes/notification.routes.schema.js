const Joi = require('joi');

const notificationSchema = Joi.object({
    to: Joi.string().required(),
    message: Joi.string().min(5).required(),
});

module.exports = {
    notificationSchema,
};
