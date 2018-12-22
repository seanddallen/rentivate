const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const Listing = require('./models/listing');
const SeedDb = require('./seed-db')
const path = require('path');
const app = express();

const listingRoutes = require('./routes/listings')

mongoose.connect(config.DB_URI).then(() => {
  const seedDb = new SeedDb();
  seedDb.seedDb();
}).catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/api/v1/listings', listingRoutes);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/bookings', bookingRoutes);

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'build');
  app.use(express.static(appPath));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log(`App is running on PORT ${PORT}`);
});
