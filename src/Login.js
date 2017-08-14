/*jshint esnext: true */
import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
			<div>
			<MuiThemeProvider>
				<div className="Login">
					<AppBar 
						title=Login
					/>
						<TextField
							hintText="Enter Your Username";
							floatingLabelText="Username";
							onChange={(event, newValue) => this.setState({username:newValue})}; 
						/>	
						</br>
						<TextField
							hintText="Enter Your Password";
							floatingLabelText="Password";
							onChange={(event, newValue) => this.setState({password:newValue})};
						/>
						</br>
						<RaisedButton label="Submit" primary={true} style={style} labelColor={primary} onClick={(event) => this.handleClick(event)}/>
				</div>
			</MuiThemeProvider>
			</div>
	}
}