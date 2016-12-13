'use strict';

const express = require('express'),
    articleController = require('../controllers/articleController.js'),
    indexController = require('../contorllers/indexController.js'),
    router = express.Router();


// `/` - will load your single HTML page (with ReactJS) in public/index.html
router.get('/', indexController.loadIndex);


// * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
router.get('/api/saved', articleController.queryDB);


// `/api/saved` (post) - your components will use this to save an article to the database
router.post('/api/saved', articleController.saveArticles);


// `/api/saved` (delete) - your components will use this to delete a saved article in the database

router.delete('/api/saved', articleController.deleteArticles);


module.exports = router;
