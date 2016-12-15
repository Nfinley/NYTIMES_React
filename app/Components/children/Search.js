import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      startYear: "",
      endYear: ""
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
    console.log(this.state.term);
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
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
                <strong>Topic</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                type="text"
                className="form-control text-center"
                id="term"
                value={this.state.term}
                onChange={this.handleChange}
                required
              />
              <h4 className="">
                <strong>Start Year</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="term"
                  value={this.state.startYear}
                  onChange={this.handleChange}

              />
              <h4 className="">
                <strong>End Year</strong>
              </h4>
              <input
                  type="text"
                  className="form-control text-center"
                  id="term"
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

export default Form;
