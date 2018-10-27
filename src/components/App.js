import React from "react";
import "../styles/App.css";
import "./LinkList";
import LinkList from "./LinkList"; //eslint-disable-line

class App extends React.Component {
	render() {
		return (
			<div>
				<LinkList />
			</div>
		);
	}
}

export default App;
