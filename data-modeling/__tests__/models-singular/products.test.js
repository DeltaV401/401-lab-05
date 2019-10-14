'use strict';

const Products = require('../../models-singular/products');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Products Model (singular)', () => {
  it('can create() a new product', async () => {
    // Arrange
    let production = {
      name: 'Lysol Cleaning Spray',
      description: 'Cleans almost clean surfaces and makes your cat run away.',
      price: 7.99,
      category: 'Cleaning',
    };

    // Act
    let product = await products.create(production);

    // Assert
    expect(product).toHaveProperty('name', 'Lysol Cleaning Spray');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('price', 7.99);
    expect(product).toHaveProperty('category', 'Cleaning');
  });

  it('can get() a product', async () => {
    // Arrange
    let production = {
      name: 'Lysol Cleaning Spray',
      description: 'Cleans almost clean surfaces and makes your cat run away.',
      price: 7.99,
      category: 'Cleaning',
    };

    let product = await products.create(production);

    // Act
    let saved = await products.get(product._id);

    // Assert
    expect(saved).toHaveProperty('_id', product._id);
    expect(saved).toHaveProperty('name', 'Lysol Cleaning Spray');
  });

  it('can get() all products', async () => {
    // Arrange
    let production1 = {
      name: 'Lysol Cleaning Spray',
      description: 'Cleans almost clean surfaces and makes your cat run away.',
      price: 7.99,
      category: 'Cleaning',
    }
    let production2 = {
      name: 'Bounty Paper Towels',
      description: 'The quicker picker upper for your children\'s spilled supper.',
      price: 15.99,
      category: 'Cleaning',
    }

    let makeProduct1 = await products.create(production1);
    let makeProduct2 = await products.create(production2);

    // Act
    let saved1 = await products.get(makeProduct1._id);
    let saved2 = await products.get(makeProduct2._id);

    // Assert
    expect(saved1).toHaveProperty('_id', makeProduct1._id);
    expect(saved1).toHaveProperty('name', 'Lysol Cleaning Spray');
    expect(saved2).toHaveProperty('_id', makeProduct2._id);
    expect(saved2).toHaveProperty('name', 'Bounty Paper Towels');
  });

  it('can update() a product', async () => {
    // Arrange
    let production = {
      name: 'Lysol Cleaning Spray',
      description: 'Cleans almost clean surfaces and makes your cat run away.',
      price: 7.99,
      category: 'Cleaning',
    }

    let product = await products.create(production);

    // Act
    let updatedProduct = await products.update(product._id, { price: 4.99 });

    // Assert
    expect(updatedProduct).not.toBe(product);
    expect(updatedProduct).toHaveProperty('name', 'Lysol Cleaning Spray');
    expect(updatedProduct).toHaveProperty('price', 4.99);
  });

  it('can delete() a product', async () => {
    // Arrange
    let production = {
      name: 'Lysol Cleaning Spray',
      description: 'Cleans almost clean surfaces and makes your cat run away.',
      price: 7.99,
      category: 'Cleaning', 
    }

    let product = await products.create(production);

    // Act
    let deletedProduct = await products.delete(product._id);

    // Assert
    expect(deletedProduct).toBeDefined();
    expect(products).toEqual({});
  });
});