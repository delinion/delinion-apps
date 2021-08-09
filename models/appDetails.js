const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appDetailsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    latestAndroidVersion: Schema.Types.String
}, {
    timestamps: true
});
const AppDetails = mongoose.model('appDetails', appDetailsSchema, 'appDetails');
module.exports = { AppDetails, appDetailsSchema };