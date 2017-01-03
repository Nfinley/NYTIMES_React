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

  },

  queryDB: () => {
    const queryUrl = "/saved";
    return axios.get(queryUrl).then((response)=> {
      return response.data;
    });
  },

  saveArticles: (article) => {
    console.log("title  - " + article.title);

    const queryURL = "/saved?title="+article.title+"&abstract="+article.abstract+"&url="+article.url;
    return axios.post(queryURL).then((response)=> {
      // console.log(response);
      return response.data;
    });

  },


    deleteArticles: (id)=> {
        const queryURL = "/saved?_id="+id;

        return axios.delete(queryURL).then((response) => {
            console.log("The Delete response data: " + response.data);

            return response.data;
        });
    }

};


export default helpers;
