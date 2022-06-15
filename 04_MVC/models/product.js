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
  constructor(title) {
    this.title = title;
  }
  save() {
    getFileContent(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getFileContent(cb);
  }
}