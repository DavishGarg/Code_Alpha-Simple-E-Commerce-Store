const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, async (req, res) => {
    const order = await Order.create({
        userId: req.user.id,
        products: req.body.products,
        totalAmount: req.body.totalAmount
    });

    res.json({
        message: 'Order placed successfully',
        order
    });
});

module.exports = router;