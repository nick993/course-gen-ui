import React from "react"; // eslint-disable-line 
import ReactDOM from "react-dom";
import "./styles/App.css"; 
import App from "./components/App"; // eslint-disable-line
import * as serviceWorker from "./serviceWorker";
import {ApolloProvider} from "react-apollo"; //eslint-disable-line
import {createHttpLink} from "apollo-link-http";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

console.log('SErver Log :; ' + process.env.NODE_ENV + process.env.REACT_APP_LOCAL_API)

const httpLink = createHttpLink({
	uri: (process.env.NODE_ENV === "production" ? process.env.REACT_APP_LOCAL_API : process.env.REACT_APP_LOCAL_API)
});

const client = new ApolloClient({
	link: httpLink, 
	cache: new InMemoryCache()
});


ReactDOM.render(
	<ApolloProvider client = {client}>
		<App />
	</ApolloProvider>, 
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
