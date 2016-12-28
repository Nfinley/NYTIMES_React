'use strict';
import Articles from ('../models/Articles');




module.exports = {

//    get News Function which will look in the database for all the content (update show articles based on session variables instead of database
    queryDB: (req, res) => {
            Articles.find({}).exec(function (error, doc) {
                // console.log("The data: ", doc);
                // Log any errors
                if (error) {
                    console.log(error);
                }
                // Or send the doc to the browser as a json object
                else {

                    res.json(doc);

                }
            });
    },


//function that creates new note and update existing note
    saveArticles: (req, res) => {
        console.log("This is content of data: ", req.body, req.params.id);
        // Create a note and pass the req.body to the entry
        Articles.findOneAndUpdate({title:req.query.title}, {title: req.query.title, abstract: req.query.abstract, url: req.query.url}, {safe: true, upsert: true, new:true},
            function(err, model){
                if(err){
                    console.log(err);
                }
                Articles.find({}).exec(function (error, doc) {
                    if (error) {
                        console.log(error);
                    }
                    // Or send the doc to the browser as a json object
                    else {

                        res.json(doc);

                    }

                });
            });

    },

    deleteArticles: (req, res) => {
        News.update({"_id": req.params.id}, {$unset: {note: "$oid"}}, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                res.send(response);
                console.log(response);
            }
        })


    }

};

