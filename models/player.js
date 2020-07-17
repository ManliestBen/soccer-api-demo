const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    player: {},
    teams: [],
    roles: [],
    statistics: {},
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}, { timestamps: true })

module.exports = mongoose.model('Player', playerSchema);

