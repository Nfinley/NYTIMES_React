import React from "react";

//This needs to show the top five results

export default class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            abstract: "",
            url: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //to handle the on submit button to save the article and save the article state
    handleSubmit(e){
        e.preventDefault();
        this.state.title = e.target.title.value;
        this.state.abstract = e.target.abstract.value;
        this.state.url = e.target.url.value;
        console.log(this.state);
        console.log("Click");


        this.props.setSaveData(this.state);
        this.setState({ title: "" });
        this.setState({ abstract: "" });
        this.setState({ url: "" });


    }
    render() {
        console.log(this.props.results);
        // const Articles = this.props.results.map(article, i) =>
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Search Results</h3>
                </div>
                <div className="panel-body text-center">
                <div> {
                    this.props.results.length > 0 && this.props.results[0].title != "" &&
                    this.props.results.map(function(data, i) {
                        return <div key = { i } className = 'articleContainer'>
                            <form onSubmit = { this.handleSubmit } >
                                <input type = "hidden" id = "title" defaultValue = { data.title }
                                       ref = { (title) => this.title = title } />
                                <input type = "hidden" id = "abstract" defaultValue = { data.abstract }
                                       ref = {(abstract) => this.abstract = abstract } />
                                <input type = "hidden" id = "url" defaultValue = { data.url }
                                       ref = {(url) => this.url = url } />
                                <h2>{ data.title } </h2> <p> { data.abstract } </p> <button className="btn btn-default"><a href={data.url}> Read More </a></button>
                                <button type = "submit" className = "btn btn-default" id = "runSearch" > Save Article </button>
                            </form> </div>
                    }, this)}
                    </div>
                </div>
            </div>

        );
    }
}


