import React from "react";
import "../styles/App.css";
import AppBar from "./Appbar"; //eslint-disable-line
import MainPanel from "./Main"; //eslint-disable-line
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles"; //eslint-disable-line

class App extends React.Component {
	render() {

		const theme = createMuiTheme({
			palette: {
				primary: blue,
				secondary: red,
			},
			status: {
				danger: 'orange',
			},
		});
		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<AppBar />
					<MainPanel />
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
