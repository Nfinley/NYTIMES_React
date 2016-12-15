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
      // results: [{title:"", abstract:""}]
    };

    this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
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

            <Search setTerm={this.setTerm} />

          </div>

          <div className="col-md-12">

            <Results address={this.state.results} />

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

// Export the componen back for use in other files
export default Main;
