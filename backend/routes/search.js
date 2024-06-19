import express from 'express';
import Item from '../models/item.js';

const router = express.Router();

// Search route
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const items = await Item.find({
            $or: [
                { name: new RegExp(query, 'i') },
                { description: new RegExp(query, 'i') }
            ]
        });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
