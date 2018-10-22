const express = require("express");
const { Router } = express;

const Item = require("../model/items");

const itemRouter = Router();

itemRouter.route("/")
    .get((req, res, next) => {
        Item.find({}, (err, items) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(200).send(items);
        })
    })
    .post((req, res, next) => {
        const newItem = new Item(req.body)
        newItem.save((err, savedItem) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(201).send(savedItem);
        })
    })

itemRouter.route("/:id")
    .get((req, res) => {
        Item.findById(req.params.id, (err, foundItem) => {
            if(err){
                res.status(400)
                throw new Error("There is a problem with the database");
            }
            res.status(200).send(foundItem)
        })
    })
    .delete((req, res) => {
        Item.findByIdAndDelete(req.params.id, (err) => {
            if(err){
                res.status(400)
                throw new Error("There is a problem with the database");
            }
            res.status(204).send();
        })
    })
    .put((req, res) => {
        Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
            if(err){
                res.status(400);
                throw new Error("There is a problem with the database");
            }
            res.status(200).send(updatedItem);
        })
    })

module.exports = itemRouter;