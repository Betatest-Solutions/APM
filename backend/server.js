import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Info from './models/Info';

const app = express();
const router = express.Router();
var port = 4000;
app.use(cors());
// var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/form',{ useNewUrlParser: true } );

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

// const InfoRoutes = require('/Info.route')
//
// app.use('/Info', InfoRoutes);

router.route('/form').get((req, res) => {
  Info.find((err, form) => {
    if (err)
      console.log(err);
    else
      res.json(form);
  });
});
router.route('/form/add').post((req, res) => {
  let info = new Info(req.body);
  info.save()
    .then(info => {
      res.status(200).json({'form': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create new record');
    });
});

app.use('/', router);

app.listen(port, () => {console.log(`Express server running on port ` + port)});
// app.get('/', (req, res) => res.send('Hello World!'));
