import React from "react";
import {Well, Button} from "react-bootstrap"; //eslint-disable-line

const styles = {
	card: {
		height: "200px",
		width: "300px",
		margin: "10px"
	}
};


class Link extends React.Component {

	render() {
		return (
			<div>
				<Well style={styles.card}>
					<h3>{this.props.link.url}</h3>
					<p>{this.props.link.description}</p>
					<p>
						<Button bsStyle="primary">Visit</Button>
					</p>
				</Well>
			</div>




			
		);
	}	   
}

export default Link;