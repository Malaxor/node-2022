const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

const loadFileContent = () => {
  try {
    return JSON.parse(fs.readFileSync(p));
  } catch (err) {
    return {
      products: [],
      totalPrice: 0
    };
  }
}

module.exports = class Cart {
  static addProduct(id, price) {
    const cart = loadFileContent();
    const existingProductIndex = cart.products.findIndex(product => product.id === id);
    const existingProduct = cart.products[existingProductIndex];

    if (existingProduct) {
      let updatedProduct = { ...existingProduct };
      updatedProduct.qty += 1;
      cart.products = [...cart.products];
      cart.products[existingProductIndex] = updatedProduct;
    } else {
      cart.products = [...cart.products, { id, qty: 1 }];
    }
    cart.totalPrice += parseFloat(price);
    fs.writeFileSync(p, JSON.stringify(cart));
  }
  static deleteProduct(id, price) {
    const cart = loadFileContent();
    const updatedCart = { ...cart };
    const existingProductIndex = updatedCart.products.findIndex(product => product.id === id);
    const [ removedProduct ] = updatedCart.products.splice(existingProductIndex, 1);
    updatedCart.totalPrice -= parseFloat(price) * removedProduct.qty;
    fs.writeFileSync(p, JSON.stringify(updatedCart));
  }
}