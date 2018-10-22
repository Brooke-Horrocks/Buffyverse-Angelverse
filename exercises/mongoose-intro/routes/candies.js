const express = require("express");
const { Router } = express;

//Convention to name variable same as the model name
const Candy = require("../models/candies")

const candyRouter = Router();

//define routes here
candyRouter.route("/")
    .get((req, res) => {
        //ask database for the right data and send it to the client
        Candy.find({}, (err, candies) => {
            if(err) {
                res.status(400)
                throw new Error("There is a problem with the database")
            }
            res.status(200).send(candies);
        })
    })
    .post((req, res) => {
        //Convert request body into a document
        const newCandy = new Candy(req.body);
        //Save the document to the collection
        newCandy.save((err, savedCandy) => {
            if(err){
                res.status(400)
                throw new Error("There was a problem with the database")
            } 
            res.status(201).send(savedCandy);
        });
    })

candyRouter.route("/:id")
    .get((req, res) => {
        Candy.findById(req.params.id, (err, foundCandy) => {
            if(err) {
                res.status(400)
                throw new Error("There was a problem with the database")
            }
            res.status(200).send(foundCandy);
        })
    })
    .delete((req, res) => {
        Candy.findByIdAndDelete(req.params.id, (err, deletedCandy) => {
            if(err){
                res.status(400)
                throw new Error("There was a problem with the database")
            }
            res.status(204).send();
        })
    })
    .put((req, res) => {
        Candy.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, editedCandy) => {
            if(err){
                res.status(400)
                throw new Error("There was a problem with the database")
            }
            res.status(200).send(editedCandy);
        })
    })

module.exports = candyRouter;