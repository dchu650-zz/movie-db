/*jshint esnext: true */
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';

class Login extends Component{
	constructor(props){
		this.state={
		"username":username,
		"password":password
		}
	}
	render(){
		return(
			var payload={
				"username":username,
				"password":password
			}			
			<div className="Login">
				<AppBar title = Login/>
					<TextField
						hintText = "";
					/>	
}