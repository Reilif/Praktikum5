/**
 * Created by Robin on 19.05.2015.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Mails     = require('./app/models/mails');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/folder')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
        Mails.allFolders(function (err, folders) {
            console.log(folders);
            if (err)
                res.send(err);

            res.json(folders);
        });
    });

router.route('/folder/:foldername')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
        Mails.getFolderMessage(req.params.foldername, function (err, msgs) {
            console.log(msgs);
            if (err)
                res.send(err);

            res.json(msgs);
        });
    })

    .delete(function(req, res){
        Mails.remove({
            folder: req.params.foldername
        }, function(err, mail) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    })

    .put(function(req, res) {

        Mails.renameFolder(req.params.foldername, req.body.newval, function (err, msgs) {
            console.log(msgs);
            if (err)
                res.send(err);

            res.json(msgs);
        });
    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);