'use strict';
// Include the React library
import React from 'react';

// Include the Router
import {Router, Route, IndexRoute, hashHistory} from "react-router";

// Reference the high-level components
import Main from '../components/Main';



// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Router history = {hashHistory}>
		<Route path='/' component={Main}>
		</Route>

	</Router>


);