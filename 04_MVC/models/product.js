const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getFileContent = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    try {
      cb(JSON.parse(fileContent));
    } catch (err) {
      cb([]);
    }
  });
}

module.exports = class Product {
  constructor({ id, title, imageUrl, description, price }) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getFileContent(products => {
      // when updating the product, this.id exists
      if (this.id) {
        const existingProductIndex = products.findIndex(product => product.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });    
      }
    });
  }
  static fetchAll(cb) {
    getFileContent(cb);
  }
  static findById(id, cb) {
    getFileContent(products => {
      cb(products.find(product => product.id === id));
    });
  }
  static deleteById(id) {
    getFileContent(products => {
      const filteredProducts = products.filter(product => product.id !== id);
      fs.writeFileSync(p, JSON.stringify(filteredProducts));   
    });
  }
}