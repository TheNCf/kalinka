const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "kalinka",
    password: ""
});
  
app.get('/selectModels', async (req, res, next) => {
    let productData = {};
  
    productData.arr = () => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT id_model, name, price, discount FROM models', (err, rows) => {
          if(err) {
            return(reject);
          } else {
            return resolve(rows);
          }
        })
      })
    }
    let result = await productData.arr();
    res.json(result);
});

app.listen(4000, () => {
    console.log('Server started.')
});