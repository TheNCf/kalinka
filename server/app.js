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
    let modelsData = {};
  
    modelsData.arr = () => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT models.id_model, MAX(models.name) AS name, MAX(models.kind) AS kind, MAX(models.type) AS type, MAX(models.price) AS price, MAX(models.discount) AS discount, MAX(images.image) AS image FROM models INNER JOIN images ON models.id_model = images.id_model GROUP BY models.id_model', (err, rows) => {
          if(err) {
            return(reject);
          } else {
            return resolve(rows);
          }
        })
      })
    }
    let result = await modelsData.arr();
    res.json(result);
});

app.get('/selectColors', async (req, res, next) => {
  let itemsData = {};

  itemsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT items.color AS color FROM models INNER JOIN items ON models.id_model = items.id_model GROUP BY items.color', (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      })
    })
  }
  let result = await itemsData.arr();
  res.json(result);
});

app.get('/selectSizes', async (req, res, next) => {
  let itemsData = {};

  itemsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT items.size AS size FROM models INNER JOIN items ON models.id_model = items.id_model GROUP BY items.size', (err, rows) => {
        if(err) {
          return(reject);
        } else {
          return resolve(rows);
        }
      })
    })
  }
  let result = await itemsData.arr();
  res.json(result);
});

app.listen(4000, () => {
    console.log('Server started.')
});