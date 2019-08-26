import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Login from './components/Login';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser, loadingBar } = this.props;

		return (
			<Router>
				<div className="text-center">
					{loadingBar.default === undefined || loadingBar.default === 1 ? (
						<Spinner
							animation="border"
							role="status"
							variant="secondary"
							className="my-5"
						>
							<span className="sr-only">Loading...</span>
						</Spinner>
					) : (
						<Fragment>{!authedUser ? <Login /> : <PrivateApp />}</Fragment>
					)}
				</div>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
