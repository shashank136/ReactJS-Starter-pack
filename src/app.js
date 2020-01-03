import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import './css/app.css'

class App extends Component{

	render(){
		return(
			<div>
				<h1>This is Starter code for reactJS</h1>
			</div>
		);
	}
}

export default hot(module)(App);