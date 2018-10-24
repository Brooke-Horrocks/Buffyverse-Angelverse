const express = require("express");
const { Router } = express;

const Flavor = require("../models/flavors.js");

const flavorRouter = Router();

flavorRouter.route("/")
    .get((req, res, next) => {
        Flavor.find({})
            .then(flavors => res.status(200).send(flavors))
            .catch(err => next(err))
    })
    .post((req, res, next) => {
        const newFlavor = new Flavor(req.body);
        newFlavor.save((err, savedFlavor) => {
            if(err){
                res.status(400);
                next(err)
            }
            res.status(201).send(savedFlavor)
        });
    })

module.exports = flavorRouter;