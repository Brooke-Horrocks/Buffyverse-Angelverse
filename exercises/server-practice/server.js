const express = require('express');
const bodyParser = require('body-parser');

// Fake data to access
const candies = require('./candy.json');
const uuid = require('uuid')


// Create express server
const app = express();

app.use(express.json());

// Example get request
// app.route('/')
//     .get((req, res) => {
//         res.status(200).send({
//             message: `Successful ${req.method} from ${req.hostname}`,
//             params: req.params,
//             query: req.query,
//             baseUrl: req.baseUrl,
//             tags: ['js', 'node', 'mongodb', 'react', 'v school']
//         });
//     });

// Get all candies and add new candies
app.route('/api/candies')
    .get((req, res) => {
        res.status(200).send(candies);
    })
    .post((req, res) => {
        req.body.id = uuid();
        candies.push(req.body);
        res.status(201).send(req.body);
    })

// Get specific candy and delete it or edit it
app.route('/api/candies/:id')
    .get((req, res) => {
        const foundCandy = candies.find(candy => candy.id === req.params.id)
        res.status(200).send(foundCandy) || {message: `No candy with id ${req.params.id} was found`};
    })
    .delete((req, res) => {
        candies.splice(req.params.id, 1);
        res.status(204).send();
    })
    .put((req, res) => {
        const foundCandy = candies.find(candy => candy.id === req.params.id)
        const editedCandy = {...foundCandy, ...req.body}
        candies.splice(candies.indexOf(foundCandy), 1, editedCandy);
        res.status(200).send(editedCandy)
    })

// Tell server to listen for requests on specific port
app.listen(8000, () => {
    console.log('Successfully running on port 8000');
}); 