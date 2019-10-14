'use strict';

const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {
  it('can create() a new category', async () => {    
    // Arrange
    let catObj = {
      name: 'Charles',
      description: 'Describing descriptions descriptively describes descriptions descriptively.',
    };

    // Act
    let category = await categories.create(catObj);

    // Assert
    expect(category).toHaveProperty('name', 'Charles');
    expect(category).toHaveProperty('description');
    expect(category).toHaveProperty('_id');
  });

  it('can get() a category', async () => {
    // Arrange
    let catObj = {
      name: 'Charles',
      description: 'Describing descriptions descriptively describes descriptions descriptively.',
    }

    let category = await categories.create(catObj);

    // Act
    let saved = await categories.get(category._id);

    // Assert
    expect(saved).toHaveProperty('_id', category._id);
    expect(saved).toHaveProperty('name', 'Charles');
  });

  it('can get() all categories', async () => {
    // Arrange
    let catObj1 = {
      name: 'Charles',
      description: 'Describing descriptions descriptively describes descriptions descriptively.',
    }
    let catObj2 = {
      name: 'Charlie',
      description: 'Explaining explanations explicitively explains explanations explicitively.',
    }
    
    let category1 = await categories.create(catObj1);
    let category2 = await categories.create(catObj2);

    // Act
    let saved1 = await categories.get(category1._id);
    let saved2 = await categories.get(category2._id);

    // Assert
    expect(saved1).toHaveProperty('_id', category1._id);
    expect(saved1).toHaveProperty('name', 'Charles');
    expect(saved2).toHaveProperty('_id', category2._id);
    expect(saved2).toHaveProperty('name', 'Charlie');
  });

  it('can update() a category', async () => {
    // Arrange
    let catObj = {
      name: 'Charles',
      description: 'Describing descriptions descriptively describes descriptions descriptively.',
    }

    let category = await categories.create(catObj);

    // Act
    let updatedCategory = await categories.update(category._id, { description: 'Explaining explanations explicitively explains explanations explicitively.' });

    // Assert
    expect(updatedCategory).not.toBe(category);
    expect(updatedCategory).toHaveProperty('name', 'Charles');
    expect(updatedCategory).toHaveProperty('description', 'Explaining explanations explicitively explains explanations explicitively.');
  });

  it('can delete() a category', async () => {
    // Arrange
    let catObj = {
      name: 'Charles',
      description: 'Describing descriptions descriptively describes descriptions descriptively.',
    }

    let category = await categories.create(catObj);

    // Act
    let deletedCategory = await categories.delete(category._id);

    // Assert
    expect(deletedCategory).toBeDefined();
    expect(categories).toEqual({});
  });

});