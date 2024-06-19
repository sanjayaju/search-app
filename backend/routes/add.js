import express from 'express';
import Item from '../models/item.js';

const router = express.Router();

// Add item route
router.post('/add', async (req, res) => {
    const { name, description } = req.body;

    const newItem = new Item({
        name,
        description
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
