import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { reSetAuthedUser } from '../actions/authedUser';

const styles = (theme) => ({
	toolbarMain: {
		borderBottom: `1px solid ${theme.palette.grey[300]}`
	},
	toolbarTitle: {
		flex: 1
	}
});

function Nav(props) {
	const { classes, user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<Fragment>
			<Toolbar className={classes.toolbarMain}>
				<Typography
					variant="headline"
					color="inherit"
					noWrap
					className={classes.toolbarTitle}
				>
					Would You Rather... ?
				</Typography>

				<Typography variant="subheading">{user.name}</Typography>

				<Button variant="outlined" size="small" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>

			<Toolbar variant="dense" className={classes.toolbarSecondary}>
				<Typography variant="subheading">
					<NavLink to="/" exact activeClassName="active">
						Home
					</NavLink>
					&nbsp;&nbsp;
					<NavLink to="/add" activeClassName="active">
						New Question
					</NavLink>
					&nbsp;&nbsp;
					<NavLink to="/leaderboard" activeClassName="active">
						Leaderboard
					</NavLink>
				</Typography>
			</Toolbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));
