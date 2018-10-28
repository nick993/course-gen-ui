import React from "react";
import "../styles/App.css";
import "./LinkList";
import AppBar from "./Appbar"; //eslint-disable-line
import LinkList from "./LinkList"; //eslint-disable-line

class App extends React.Component {
	render() {
		return (
			<div>
				<AppBar />
				<LinkList />
			</div>
		);
	}
}

export default App;
