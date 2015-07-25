'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pollSchema = new Schema({
    userName: String,
    pollName: String,
    pollOptions: Array,
    pollResults: Array,
    votes: Array,
    votedUsers: Array,
    comments: Array
});

module.exports = mongoose.model('Poll', pollSchema);
