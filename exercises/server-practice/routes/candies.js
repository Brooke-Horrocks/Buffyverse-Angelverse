const express = require("express");
const { Router } = express;

const Candy = require("../models/candies");

const candyRouter = Router();

// Get all candies and add new candies
candyRouter.route('/api/candies')
    .get((req, res) => {
        Candy.find(req.query)
        .then(candies => res.status(200).send(candies))
        .catch(err => next(err));
    })
    .post((req, res) => {
        const newCandy = new Candy(req.body)
        newCandy.save((err, savedCandy) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(201).send(savedCandy);
        })
    })

// Get specific candy and delete it or edit it
candyRouter.route('/api/candies/:id')
    .get((req, res, next) => {
        //TODO: Write get route
        Candy.findById(req.params.id)
        .then(candy => res.status(200).send(candy))
        .catch(err => next(err))
    })
    .delete((req, res) => {
        //TODO: Write delete route
    })
    .put((req, res) => {
        Candy.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, editedCandy) => {
            if(err) {
                res.status(400)
                next(err)
            }
            res.status(200).send(editedCandy)
        })
    })