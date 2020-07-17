const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineupSchema = new Schema({
    goalkeeper: {type: String, default: "Please Select"},
    leftFullback: {type: String, default: "Please Select"},
    leftCenterFullback: {type: String, default: "Please Select"},
    rightCenterFullback: {type: String, default: "Please Select"},
    rightFullback: {type: String, default: "Please Select"},
    leftMidfielder: {type: String, default: "Please Select"},
    leftCenterMidfielder: {type: String, default: "Please Select"},
    rightCenterMidfielder: {type: String, default: "Please Select"},
    rightMidfielder: {type: String, default: "Please Select"},
    leftCenterForward: {type: String, default: "Please Select"},
    rightCenterForward: {type: String, default: "Please Select"},
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Lineup', lineupSchema);

