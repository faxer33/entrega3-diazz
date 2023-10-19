// productManager.js

class ProductManager {
    constructor(products) {
      this.products = products;
    }
  
    getAllProducts(limit) {
      if (limit) {
        return this.products.slice(0, limit);
      }
      return this.products;
    }
  
    getProductById(pid) {
      return this.products.find(product => product.id === pid);
    }
  }
  
  module.exports = ProductManager;
  