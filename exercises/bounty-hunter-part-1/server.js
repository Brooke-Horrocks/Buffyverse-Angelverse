const express = require('express');
const uuid = require('uuid');

const bounties = require('./bounties.json')

const app = express();
app.use(express.json());

app.route('/api/bounties')
    .get((req, res) => {
        res.status(200).send(bounties);
    })
    .post((req, res) => {
        req.body.id = uuid();
        bounties.push(req.body);
        res.status(201).send(req.body)
    })

app.route('/api/bounties/:id')
    .get((req, res) => {
        const foundBounty = bounties.find(bounty => bounty.id === req.params.id);
        res.status(200).send(foundBounty) || {message: `No bounty with id ${req.params.id} found.`};
    })
    .delete((req, res) => {
        bounties.splice(req.params.id, 1);
        res.status(204).send();
    })
    .put((req, res) => {
        const foundBounty = bounties.find(bounty => bounty.id === req.params.id);
        const editedBounty = {...foundBounty, ...req.body};
        bounties.splice(bounties.indexOf(foundBounty), 1, editedBounty);
        res.status(200).send(editedBounty);
    })

app.listen(8000, () => {
    console.log('Successfully running on port 8000');
})