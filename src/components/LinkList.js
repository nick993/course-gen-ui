import React from "react";
import Link from "./Link"; //eslint-disable-line
import {Query} from "react-apollo"; //eslint-disable-line
import gql from "graphql-tag";

const styles = {
	linksList: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexWrap: "wrap",
		margin: "10px",
		padding: "10px"
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
		return (
			<Query query = {LINK_QUERY}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching...</div>;
					if (error) return <div>{error}</div>;

					let linksToRender = data.allLinks;
					return (
						<div style = {styles.linksList}>{
							linksToRender.map(link => <Link key = {link.id} link = {link} />)} 
						</div>
					);
				}}
			</Query>
		);

	}
}

export default LinkList;