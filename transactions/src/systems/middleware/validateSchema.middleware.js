const { transactionSchema } = require('../../routes/transaction.routes.schema');

const validateSchema = (req, res, next) => {
    const { error } = transactionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateSchema };
