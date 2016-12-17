// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// NY Times API
const nytimesAPI = "89b6e5013f424f6db1eb2a5402d56688";

// Helper Functions
const helpers = {

  runQuery: (searchParam, begin, end) => {

    console.log(searchParam, begin, end);

    // Figure out the geolocation
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytimesAPI + "&q=" + searchParam + "&sort=newest";

    return axios.get(queryURL).then((response) => {


      let queryData = response.data.response.docs;
      console.log("These are the results of the query: " +  queryData);
      // return response.data.results[0].formatted;
      return queryData;

    });

  }

// TODO Add in a get articles function from database to render on saved page


// TODO a `save` articles would happen from the results section and add to database and then call get articles


// Todo Add a delete articles


};


export default helpers;
