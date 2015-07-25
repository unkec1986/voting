'use strict';

var _ = require('lodash');
var Poll = require('./poll.model');

// Get list of polls
exports.index = function (req, res) {
    Poll.find(function (err, polls) {
        if (err)
            return handleError(res, err);

        return res.json(200, polls);
    });
};

exports.show = function (req, res) {
    //Return all polls
    if (req.params.pollName === 'all') {
        if (err)
            return handleError(res, err);

        if (!poll)
            return res.send(404);

        return res.json(poll);
    } else {
        Poll.find({
            'userName': req.params.userName,
            'pollName': req.params.pollName
        }, function (err, poll) {
            if (err)
                return handleError(res, err);

            if (!poll)
                return res.send(404);

            return res.json(poll);
        });
    }
};

exports.create = function (req, res) {
    Poll.create(req.body, function (err, poll) {
        if (err)
            return handleError(res, err);

        return res.json(201, poll);
    });
};

exports.update = function (req, res) {
    if (req.body._id)
        delete req.body._id;

    Poll.findById(req.params.id, function (err, poll) {
        console.log(poll);

        poll.remove(function (err) {
            if (err)
                return handleError(res, err);

            Poll.create(req.body, function (err, poll) {
                if (err)
                    return handleError(res, err);

                return res.json(201, poll);
            });
        });
    });
};

exports.destroy = function (req, res) {
    Poll.findById(req.params.id, function (err, poll) {
        if (err)
            return handleError(res, err);

        if (!poll)
            return res.send(404);

        poll.remove(function (err) {
            if (err)
                return handleError(res, err);

            return res.send(204);
        });

    });
}

function handleError(res, err) {
    return res.send(500, err);
}
