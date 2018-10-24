const express = require("express");
const { Router } = express;

const Post = require("../models/posts");

const voteRouter = Router();

// Get/Create posts
voteRouter.route("/")
    .get((req, res, next) => {
        Post.find({}, (err, posts) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(200).send(posts)
        })
    })
    .post((req, res, next) => {
        const newPost = new Post(req.body);
        newPost.save((err, savedPost) => {
            if(err) next(err)
            else res.status(201).send(savedPost)
        })
    })

// Get/Delete/Edit specific post
voteRouter.route("/:id")
    .get((req, res, next) => {
        Post.findById(req.params.id, (err, foundPost) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(200).send(foundPost)
        })
    })
    .delete((req, res, next) => {
        Post.findById(req.params.id, (err) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(204).send()
        })
    })
    .put((req, res, next) => {
        Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
            if(err){
                res.status(400)
                next(err)
            }
            res.status(200).send(updatedPost)
        })
    })

// Create new comment
voteRouter.route("/:id/comments")
    .post((req, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            foundPost.comments.push(req.body);
            return foundPost.save()
        })
        .then(savedPost => res.status(201).send(savedPost))
        .catch(err => next(err))
    })

// Get/Delete/Edit specific comment
voteRouter.route("/:id/comments/:commentId")
    .get((req, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            const foundComment = foundPost.comments.id(req.params.commentId)
            res.status(200).send(foundComment)
        })
    })
    .delete((req, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            foundPost.comments.id(req.params.commentId).remove()
            foundPost.save((err) => {
                if(err){
                    res.status(400)
                    next(err)
                }
                res.status(204).send();
            })
        })
    })
    .put((req, res, next) => {
        Post.findById(req.params.id)
        .then(foundPost => {
            const foundComment = foundPost.comments.id(req.params.commentId);
            foundComment.set(req.body)
            return foundPost.save((err) => {
                if(err){
                    res.status(400)
                    next(err)
                }
                res.status(200).send(foundComment)
            });
        })
    })

module.exports = voteRouter;