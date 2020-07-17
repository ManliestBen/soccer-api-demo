const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineupSchema = new Schema({
    goalkeeper: String,
    leftFullback: String,
    leftCenterFullback: String,
    rightCenterFullback: String,
    rightFullback: String,
    leftMidfielder: String,
    leftCenterMidfielder: String,
    rightCenterMidfielder: String,
    rightMidfielder: String,
    leftCenterForward: String,
    rightCenterForward: String,
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Lineup', lineupSchema);

