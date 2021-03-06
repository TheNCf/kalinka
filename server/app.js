const express = require('express');
const mysql = require('mysql2');
const app = express();
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root",
  database: "kalinka",
  password: "root",
  charset: "UTF8_UNICODE_CI"
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/selectModels', async (req, res, next) => {
  const filter = req.body.filter;
  let modelsData = {};
  let sql = 'SELECT models.id_model, MAX(models.name) AS name, MAX(models.kind) AS kind, MAX(models.type) AS \'type\', MAX(models.price) AS price, MAX(models.discount) AS discount, MAX(images.image) AS image FROM (models INNER JOIN images ON models.id_model = images.id_model) INNER JOIN items ON models.id_model = items.id_model ' + filter + 'GROUP BY models.id_model';
  modelsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, rows) => {
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

app.post('/selectTypes', async (req, res, next) => {
  const kind = req.body.kind;
  let modelsData = {};

  modelsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT models.type AS type FROM models ' + kind + ' GROUP BY models.type', (err, rows) => {
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

app.post('/selectColors', async (req, res, next) => {
  const kind = req.body.kind;
  let itemsData = {};

  itemsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT items.color AS color FROM models INNER JOIN items ON models.id_model = items.id_model ' + kind + ' GROUP BY items.color', (err, rows) => {
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

app.post('/selectSizes', async (req, res, next) => {
  const kind = req.body.kind;
  let itemsData = {};

  itemsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT items.size AS size FROM models INNER JOIN items ON models.id_model = items.id_model ' + kind + ' GROUP BY items.size', (err, rows) => {
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

app.get('/selectNewModels', async (req, res, next) => {
  let modelsData = {};
  let sql = 'SELECT models.id_model, MAX(models.name) AS name, MAX(models.kind) AS kind, MAX(models.type) AS \'type\', MAX(models.price) AS price, MAX(models.discount) AS discount, MAX(images.image) AS image FROM (models INNER JOIN images ON models.id_model = images.id_model) INNER JOIN items ON models.id_model = items.id_model GROUP BY models.id_model ORDER BY models.id_model DESC LIMIT 4';
  modelsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, rows) => {
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

app.get('/selectDiscountModels', async (req, res, next) => {
  let modelsData = {};
  let sql = 'SELECT models.id_model, MAX(models.name) AS name, MAX(models.kind) AS kind, MAX(models.type) AS \'type\', MAX(models.price) AS price, MAX(models.discount) AS discount, MAX(images.image) AS image FROM (models INNER JOIN images ON models.id_model = images.id_model) INNER JOIN items ON models.id_model = items.id_model GROUP BY models.id_model ORDER BY models.discount DESC LIMIT 4';
  modelsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, rows) => {
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

app.post('/selectItemCount', async (req, res, next) => {
  const item = req.body.item;
  let itemsData = {};

  itemsData.arr = () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT SUM(items.quantity) AS quantity FROM models INNER JOIN items ON models.id_model = items.id_model ' + item, (err, rows) => {
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

app.post('/addClientInfo', async (req, res) => {
  const orderNumber = req.body.orderNumber;
  const number = req.body.number;
  const firstName = req.body.firstName;
  const period = req.body.period;
  connection.query(`INSERT INTO \`client_info\` (\`order_number\`, \`number\`, \`first_name\`, \`period\`) VALUES ('${orderNumber}', '${number}', '${firstName}', '${period}');`);
  res.send();
});

app.post('/addOrderItem', async (req, res) => {
  const orderNumber = req.body.orderNumber;
  const idModel = req.body.idModel;
  const quantity = req.body.quantity;
  const size = req.body.size;
  const color = req.body.color;
  const price = req.body.price;
  console.log(`INSERT INTO \`orders\` (\`order_number\`, \`id_model\`, \`quantity\`, \`size\`, \`color\`, \`price\`) VALUES ('${orderNumber}', '${idModel}, '${quantity}, '${size}, '${color}', '${price}');`);
  connection.query(`INSERT INTO \`orders\` (\`order_number\`, \`id_model\`, \`quantity\`, \`size\`, \`color\`, \`price\`) VALUES ('${orderNumber}', '${idModel}', '${quantity}', '${size}', '${color}', '${price}');`);
  res.send();
});

app.listen(4000, () => {
  console.log('Server started.')
});