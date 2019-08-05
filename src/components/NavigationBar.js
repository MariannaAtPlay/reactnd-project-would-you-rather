import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { reSetAuthedUser } from '../actions/authedUser';

function NavigationBar(props) {
	const { user, dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<Fragment>
			<Navbar expand="sm" bg="light" variant="light">
				<Navbar.Brand as={Link} to="/">
					Would You Rather... ?
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					<Nav>
						<Navbar.Text>{user.name}</Navbar.Text>
						<Button
							variant="outline-dark"
							onClick={handleLogout}
							className="ml-3"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavigationBar);
