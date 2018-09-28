import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Info from './models/Info';

const app = express();
const router = express.Router();
var port = 3000;
app.use(cors());
// var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var dbURL = 'mongodb://127.0.0.1:27017/form';
mongoose.connect(dbURL, { useNewUrlParser: true } );

const connection = mongoose.connection;

connection.on('error', function (err) {
  // If first connect fails because mongod is down, try again later.
  // This is only needed for first connect, not for runtime reconnects.
  // See: https://github.com/Automattic/mongoose/issues/5169
  if (err.message && err.message.match(/failed to connect to server .* on first connect/)) {
    console.log(new Date(), String(err));

    // Wait for a bit, then try to connect again
    setTimeout(function () {
      console.log("Retrying first connect...");
      connection.openUri(dbURL).catch(() => {});
      // Why the empty catch?
      // Well, errors thrown by db.open() will also be passed to .on('error'),
      // so we can handle them there, no need to log anything in the catch here.
      // But we still need this empty catch to avoid unhandled rejections.
    }, 20 * 1000);
  } else {
    // Some other error occurred.  Log it.
    console.error(new Date(), String(err));
  }
});
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
