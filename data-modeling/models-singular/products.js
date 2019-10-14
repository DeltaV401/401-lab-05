'use strict';

const Product = require('./products-schema');

class Products {
  get(_id) {
    if(_id) {
      return Product.findOne({ _id: _id });
    }
    else {
      return Product.find({});
    }
  }

  create(record) {
    let newRecord = new Product(record);
    return newRecord.save();
  }

  update(_id, changes) {
    return Product.findByIdAndUpdate(_id, changes, { new: true });
  }

  delete(_id) {
    return Product.findByIdAndDelete(_id);
  }
}

module.exports = Products;