import Joi from 'joi';

// Validation schema for creating a user
export const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    balance: Joi.number().min(0).required(),
});
