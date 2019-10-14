'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

const Category = require('./categories-schema');

class Categories {
  get(_id) {
    if(_id) {
      return Category.findOne({ _id: _id });
    }
    else {
      return Category.find({});
    }
  }

  create(record) {
    let newRecord = new Category(record);
    return newRecord.save();
  }

  update(_id, changes) {
    return Category.findByIdAndUpdate(_id, changes, { new: true });
  }

  delete(_id) {
    return Category.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
