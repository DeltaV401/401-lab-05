'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categories = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('categories ', categories);
