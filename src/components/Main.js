import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal1 from "./custom/Modal";
import { withStyles } from "@material-ui/core/styles";
import Link from "./Link"; //eslint-disable-line
import { Query } from "react-apollo"; //eslint-disable-line
import gql from "graphql-tag";

const styles = {
	button: {
		right: "10px",
		bottom: "10px",
		position: "absolute",
	},
	linksList: {
		height: "100%",
		width: "calc(100% - 10px)",
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",

	}
};

const LINK_QUERY = gql`
{
	allLinks {
    	id
  		url
    	description
	}
}`;

class LinkList extends React.Component {

	render() {

		const { classes } = this.props;
		return (
			<Query query={LINK_QUERY}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching...</div>;
					if (error) return <div>{error}</div>;

					let linksToRender = data.allLinks;
					return (
						<div style={styles.linksList}>{
							linksToRender.map(link => <Link key={link.id} link={link} />)}
						</div>
					);
				}}
			</Query>
		);

	}
}

const LinkListWithWrapper = withStyles(styles)(LinkList);

class MainPanel extends React.Component {

	state = {
		openAdd: false
	}

	openAddDialog = () => {
		this.setState({ openAdd: true });
	}
	closeDialog = () => {
		this.setState({ openAdd: false })
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<LinkListWithWrapper />
				<Button onClick={this.openAddDialog} variant="fab" color="primary" aria-label="Add" className={classes.button}>
					<AddIcon />
				</Button>
				<Modal1 onClose={this.closeDialog} open={this.state.openAdd} />
			</div>
		);
	}
}


export default withStyles(styles)(MainPanel);