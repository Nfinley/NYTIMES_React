import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      startYear: "",
      endYear: "",
      articleNum: "5",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log(this.state);
    this.props.setAllTerms(this.state);
    this.setState({searchTerm: "" });
    this.setState({startYear: "" });
    this.setState({endYear: "" });

  }

  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Article Search</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                type="text"
                className="form-control text-center"
                id="searchTerm"
                value={this.state.searchTerm}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="articleNum">Number of Records to Retrieve:</label>
              <select className="form-control" id="articleNum" value={this.state.articleNum} onChange={this.handleChange}>
                <option value='1'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
              </select>

              <h4 className="">
                <strong>Start Year (Optional)</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="startYear"
                  value={this.state.startYear}
                  onChange={this.handleChange}

              />
              <h4 className="">
                <strong>End Year (Optional)</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="endYear"
                  value={this.state.endYear}
                  onChange={this.handleChange}

              />
              <br />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
