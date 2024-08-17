const express = require('express');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new product
router.post('/products', protect, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ errors });
    }
    res.status(500).send('Server Error');
  }
});

// Get all products
router.get('/products', protect, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a product by ID
router.get('/products/:id', protect, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a product by ID
router.put('/products/:id', protect, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a product by ID
router.delete('/products/:id', protect, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
