const axios = require('axios');
const Player = require('../models/player');
const Lineup = require('../models/lineup');

module.exports = {
    americasTeamInfo,
    euTeamInfo,
    americasPlayerInfo,
    euPlayerInfo,
    americasAddPlayer,
    getDreamTeam,
    removeFromDreamTeam,
    getDreamLineup,
    saveDreamLineup
}

function saveDreamLineup(req, res){
    req.body.user = req.user._id;
    Lineup.findOneAndUpdate({"user":req.user._id}, req.body, {upsert: true, new: true})
    .then((lineup) => {if (lineup) {res.json(lineup)} else {res.json()}})
}

function getDreamLineup(req, res){
    Lineup.find({"user":req.user._id})
    .then(lineup => {res.json(lineup)})
}

function removeFromDreamTeam(req, res){
    Player.findByIdAndDelete(req.params.id)
    .then(player => {res.json(player)})
}

function getDreamTeam(req, res){
    Player.find({"user":req.user._id})
    .then(players => {res.json(players)})
}

function americasAddPlayer(req, res){
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/players/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {
        response.data.user = req.user._id;
        Player.create(response.data)
        .then(player => {res.json(player)})
    })
}

function americasTeamInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/teams/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function euTeamInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/eu/en/teams/${req.params.id}/profile.json?api_key=${process.env.EU_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function americasPlayerInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/am/en/players/${req.params.id}/profile.json?api_key=${process.env.AMERICAS_API_KEY}`)
    .then(response => {res.json(response.data)})
}

function euPlayerInfo(req, res) {
    axios.get(`https://api.sportradar.us/soccer-t3/eu/en/players/${req.params.id}/profile.json?api_key=${process.env.EU_API_KEY}`)
    .then(response => {res.json(response.data)})
}