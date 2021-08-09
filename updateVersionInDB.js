require('dotenv').config()
const mongoose = require('mongoose');
const AppDetails = require('./models/appDetails').AppDetails;
const URL = process.env.DB_CONNECTION_STRING || ''
const VERSION = process.env.ANDROID_APP_VERSION || ''

const connect = mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
connect.then(async (db) => {
    console.log('Connected correctly to server!');
    await AppDetails.findOneAndUpdate({}, {
        _id: mongoose.Types.ObjectId(),
        latestAndroidVersion: VERSION
    }, { upsert: true })
    console.log(`Android version ${VERSION} updated in DB successfully!`);
    process.exit();
}, (err) => {
    console.log(err);
});