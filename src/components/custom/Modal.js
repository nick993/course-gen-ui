import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const HEADER_TEXT = "Add Link."

const styles = theme => ({
	paper: {
		position: 'relative',
		width: "fit-content",
		height: "50%",
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
	

});


const Title = (props) => {
	return (
		<DialogTitle id="form-dialog-title">{props.text}</DialogTitle>
	);
}



const Actions = (props) => {
	return (
		<DialogActions>
			<Button onClick={this.handleClose} color="primary">
				Cancel
            </Button>
			<Button onClick={this.handleClose} color="primary">
				Subscribe
            </Button>
		</DialogActions>
	);
}

const Content = (props) => {
	return (
		<DialogContent>
			<DialogContentText>
				{props.contextText}
			</DialogContentText>
			{props.formText}
		</DialogContent>
	);
}


class CustomModal extends React.Component {
	state = {
		open: this.props.open ? this.props.open : false,
	};

	handleClose = () => {
		this.setState({ open: false });
		this.props.onClose();
	};

	componentWillReceiveProps = (nextProps) => {
		this.setState({open: nextProps.open})
	}

	Actions = (props) => {
		return (
			<DialogActions>
				<Button onClick={this.handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={this.handleClose} color="primary">
					Subscribe
				</Button>
			</DialogActions>
		);
	}
	

	getBody = () => {
		let body = [];
		body.push(
		<div>
			<TextField
				autoFocus
				margin="dense"
				id="name"
				label="Title"
				fullWidth
			/>
			<TextField
				autoFocus
				margin="dense"
				id="val"
				rows="36"
				multiline
				label="Text"
				fullWidth
			/>
		</div>
		);
		return body;
	}


	render() {
		const { classes } = this.props;

		let body = this.getBody();

		return (
			<Dialog
			fullScreen
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.open}
				onClose={this.handleClose}
				className={classes.modal}
			>
				<Title text="Subscribe" />
				<Content formText = {body} contextText={HEADER_TEXT} />
				<this.Actions />
				
			</Dialog>
		);
	}
}

const CustomModalWrapped = withStyles(styles)(CustomModal);

export default CustomModalWrapped;