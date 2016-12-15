/**
 * Created by nigelfinley on 12/12/16.
 */

//using ES6

import React from "react";


//create the react component
class Saved extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(

        //    This is what will render on the page as html
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center"> Saved Articles</h3>
                </div>
                <div className="panel-body text-center">
                    {/*Insert the saved articles*/}

                    <h2> The Body of Saved Results</h2>


                </div>
            </div>





        );
    }

}

export default Saved;