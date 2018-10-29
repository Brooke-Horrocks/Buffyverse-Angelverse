const express = require("express");
const { Router } = express;

const Book = require("../models/books");

const bookRouter = Router();

// Get/Create books
bookRouter.route("/")
    .get((req, res, next) => {
        Book.find({})
            .then(books => res.status(200).send(books))
            .catch(err => next(err))
    })
    .post((req, res, next) => {
        const newBook = new Book(req.body);
        newBook.save()
        .then(book => res.status(201).send(book))
        .catch(err => next(err))
    })

// Get/Edit/Delete specific book
bookRouter.route("/:id")
    .get((req, res, next) => {
        Book.findById(req.params.id)
            .then(foundBook => res.status(200).send(foundBook))
            .catch(err => next(err))
    })
    .put((req, res, next) => {
        Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(editedBook => res.status(200).send(editedBook))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        Book.findByIdAndDelete(req.params.id) //FIXME: Do I need to use the findByIdAndDelete or can I just use findById??
            .then(() => res.status(204).send())
            .catch(err => next(err))
    })

module.exports = bookRouter;