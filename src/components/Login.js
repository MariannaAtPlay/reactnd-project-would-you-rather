import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
//import Select from 'react-select';
//import MenuItem from '@material-ui/core/MenuItem';
import { setAuthedUser } from '../actions/authedUser';

const styles = (theme) => ({
	layout: {
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing
			.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	}
});

class Login extends Component {
	//userID = React.createRef();
	state = {
		errorMsg: ''
	};

	handleSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} else {
			this.setState({ errorMsg: 'You must make a choice' });
		}
	};

	render() {
		const { classes, userNames } = this.props;
		const { errorMsg } = this.state;

		return (
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockIcon />
					</Avatar>
					<Typography variant="headline">Login</Typography>
					{errorMsg ? (
						<p>
							<span className="text-danger">{errorMsg}</span>
							<br />
						</p>
					) : null}
					<form className={classes.form} onSubmit={this.handleSubmit}>
						<FormControl required fullWidth>
							<select ref={(id) => (this.userID = id)}>
								<option value="">Select user</option>
								{userNames.map((item) => (
									<option value={item.value} key={item.value}>
										{item.label}
									</option>
								))}
							</select>
						</FormControl>
						<Button
							type="submit"
							fullWidth
							variant="raised"
							color="primary"
							className={classes.submit}
						>
							Login
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
