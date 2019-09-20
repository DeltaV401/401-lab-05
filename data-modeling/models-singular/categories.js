'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
