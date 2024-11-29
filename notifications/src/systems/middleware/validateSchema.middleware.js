const { notificationSchema } = require('../../routes/notification.routes.schema');

const validateSchema = (req, res, next) => {
    const { error } = notificationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateSchema };
