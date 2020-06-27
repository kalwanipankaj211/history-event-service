const dotenv = require('dotenv')
dotenv.config();
var express = require('express');
const cors = require('cors');
const yamljs = require('yamljs');   
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const eventApi = require('./controllers/eventController.js');
var app = express();
app.use(cors());
var port = process.env.port || 2000;
var dbConnection = require('./helpers/db');
// dbConnection.mongoDBConnection().then((data) =>{

//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   var db = data.collection("events").insertOne(myobj , function(err,res)
//   {
//     console.log("1 document inserted");
//   })
//   data.collection("events").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
const swaggerDocument = yamljs.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
dbConnection.mongoDBConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/events',eventApi);
app.get('/',(req,res)=>{
  res.send(`Server is running at port ${port}`)
})

app.listen(port);