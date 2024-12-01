import express from 'express';
import userController from '../controller/user.controller.js';
import validateSchema from '../systems/middleware/validateSchema.middleware.js';
import { createUserSchema } from './user.routes.schema.js';

const router = express.Router();

// Route to create a new user
router.post('/',  async (req, res) => {
    try {
        const { name, balance } = req.body;
        const newUser = await userController.createUser({ name, balance });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await userController.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await userController.getUserById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
