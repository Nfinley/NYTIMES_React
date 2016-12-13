//The NEWS Model. This shows the structure of each news article

'use strict';

// Require mongoose
const mongoose = require("mongoose"),
// Create Schema class
     Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        required: true
    },
    // link is a required string
    date: {
        type: Date,
        default: Date.now()

    },
    url: {
        type: String,
        required: true
    }

});

// Create the Article model with the ArticleSchema
const Articles = mongoose.model("Articles", NewsSchema);

// Export the model
module.exports = Articles;