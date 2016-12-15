// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const nytimesAPI = "89b6e5013f424f6db1eb2a5402d56688";

// Helper Functions (in this case the only one is runQuery)
const helpers = {

  runQuery: (searchParam, begin, end) => {

    console.log(searchParam, begin, end);

    // Figure out the geolocation
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytimesAPI + "&q=" + searchParam + "&sort=newest";

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
