import React from "react";
import { Well } from "react-bootstrap"; //eslint-disable-line

import { withStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Typography, CardActions } from "@material-ui/core"; //eslint-disable-line

const styles = {
	card: {
		minWidth: 275,
		margin: 10,
		borderRadius: 15
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
};


class Link extends React.Component {

	render() {
		const { classes } = this.props;
		const link = this.props.link;
		return (
			<div>
				<Card className={classes.card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							{link.id}
						</Typography>
						<Typography variant="h5" component="h2">
							{link.url}
						</Typography>
						<Typography component="p">
							{link.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
			</div>


		);
	}
}



export default withStyles(styles)(Link);