/**
 * Created by nigelfinley on 12/12/16.
 */

//using ES6

import React from "react";


//create the react component
export default class Saved extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.state._id = e.target._id.value;
        this.props.setDelete(this.state._id);
        this.setState({_id: ""});
        console.log(this.state._id);
    }

    render() {
        return (

            //    This is what will render on the page as html
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center"> Saved Articles</h3>
                </div>
                <div className="panel-body text-center">
                    <div>
                        {this.props.results.length > 0 && this.props.results[0].title != "" &&
                        this.props.results.map(function (data, i) {
                            return <div key={i} className='articleBox'>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="hidden" id="_id"
                                           defaultValue={data._id} ref={(_id) => this._id = _id}/>
                                    <h2>{data.title}</h2>
                                    <p>{data.abstract}</p>
                                    <p><button className="btn btn-default"><a href={data.url}> Read More </a></button>
                                        <button type="submit" className="btn btn-default" id="delete">Delete Article
                                        </button></p>
                                </form>
                            </div>
                        }, this)
                        }
                        </div>
                </div>
            </div>





        );
    }

}

