const Listing = require('./models/listing');
const User = require('./models/user');
const Booking = require('./models/booking');

const fakeDbData = require('./data.json');

class FakeDb {

  constructor() {
    this.listings = fakeDbData.listings;
    this.users = fakeDbData.users;
  }

  async cleanDb() {
    await User.remove({});
    await Listing.remove({});
    await Booking.remove({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);

    this.listings.forEach((listing) => {
      const newListing = new Rental(listing);
      newListing.user = user;

      user.listings.push(newListing);
      newListing.save();
    });

    user.save();
    user2.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
