'use strict';

import React from "react";

// Import sub-components

import Search from "./children/Search";
import Results from "./children/Results";
import Saved from "./children/Saved";

// Helper Function
import helpers from "./utils/helpers";



class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchTerm: "",
            startYear: "",
            endYear: "",
            articleNum: "5",

            results: [{title: "", abstract: "", url: ""}],

            title: "",
            abstract: "",
            url: ""

            //    TODO add saved articles array
        };

        this.save = {};

        this.setAllTerms = this.setAllTerms.bind(this);
        //  will need to also bind the delete and saved data like so:
        //    this.setSave = this.setSave.bind(this);
        //    this.setDelete = this.setDelete(this);
    }


    //this function utilizes any outside AJAX or http type data
    componentDidUpdate(prevProps, prevState) {

        if ((prevState.searchTerm !== this.state.searchTerm) ||
            (prevState.startYear != this.state.startYear) ||
            (prevState.endYear != this.state.endYear)) {
            console.log("UPDATED");

            helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then((data) => {
                if (data !== this.state.results) {
                    console.log(data);
                    //add a foreach to loop over the api call and get the first 5 articles
                    let paramArray = [];
                    let articleNum = this.state.articleNum;

                    //this will loop over the api data and pull out the first 5 articles with headline, abstract and url
                    data.forEach((value, index) => {
                        if (index < articleNum) {
                            let newTitle;

                            //check to see if the print_headline from api call is unavailable and if so use the main headline
                            if(typeof value.headline.print_headline === "undefined"){
                                newTitle = value.headline.main;
                            } else {
                                newTitle = value.headline.print_headline;
                            }
                            paramArray.push({title: newTitle, abstract: value.snippet, url: value.web_url});
                        //
                        }

                    })
                    this.setState(results: paramArray);
                    console.log("The paramArray: " + paramArray);
                }
            });
        }
    }

    setAllTerms(data) {
        this.setState({
            searchTerm: data.searchTerm,
            endYear: data.endYear,
            startYear: data.startYear,
            articleNum: data.articleNum

        });
    }

    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="text-center">New York Times Article Search</h1>
                        <p className="text-center">
                            <em>Search to your hearts content and read the sophisticated NY TIMES!</em>
                        </p>
                    </div>

                    <div className="col-md-12">

                        <Search setAllTerms={this.setAllTerms}/>

                    </div>

                    <div className="col-md-12">

                        <Results results={this.state.results}/>

                    </div>
                    {/*This is where the saved child will be inserted*/}
                    <div className="col-md-12">
                        <Saved />
                    </div>
                </div>

            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
