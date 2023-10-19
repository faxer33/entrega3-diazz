// app.js
const express = require('express');
const ProductManager = require('./productManager');

const app = express();
const port = 3000;

// Mock data (replace this with your actual product data)
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  // ... add more products as needed
];

const productManager = new ProductManager(products);

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getAllProducts(limit);
  res.json(products);
});

// Endpoint para obtener un producto por ID
app.get('/products/:pid', (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(parseInt(pid, 10));
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
