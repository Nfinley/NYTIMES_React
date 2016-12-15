'use strict';


//this is the function that is called in the index router that will load the page
module.exports = {
    loadIndex: (req, res) => {
        res.send('index.html');
    }
}

