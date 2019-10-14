'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
});

module.exports = mongoose.model('products ', products);