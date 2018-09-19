import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function Nav (props) {
  console.log('Nav ', props.user)
  const { classes, user } = props;
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

		<Typography variant='subheading'>
		{user.name}
		</Typography>
			
          <Button variant="outlined" size="small">
            Logout
          </Button>
        </Toolbar>

        <Toolbar variant="dense" className={classes.toolbarSecondary}>
        <Typography variant='subheading'>
 		<NavLink to='/' exact activeClassName='active'>
            Home
        </NavLink>
        <NavLink to='/add' activeClassName='active'>
            New Question
        </NavLink>
        <NavLink to='/leaderboard' activeClassName='active'>
          Leaderboard
        </NavLink>
		</Typography>
        </Toolbar>
</Fragment>
  )
}

function mapStateToProps({ users, authedUser}) {
  return { 
  	user: users[authedUser]
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));