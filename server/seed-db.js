const Listing = require('./models/listing')

class SeedDb {
  constructor(){
    this.listings = [{
      title: "BoomBox1",
      state: "AZ",
      address: "Haupt strasse",
      category: "electronics",
      condition: "good",
      image: "http://via.placeholder.com/350x250",
      description: "Very nice item",
      rate: 33,
      method: 'pickup',
      }
    ]
  }

  pushListingsToDb(){
    this.listings.forEach(listing => {
      const newListing = new Listing(listing);
      newListing.save();
    })
  }

  cleanDb(){
    Listing.remove({});
  }

  seedDb(){
    this.cleanDb();
    this.pushListingsToDb();
  }


}

module.exports = SeedDb;
