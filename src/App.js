import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from './components/Login';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { classes, authedUser, loadingBar } = this.props;

		return (
			<Router>
				<Fragment>
					<CssBaseline />
					{loadingBar.default === undefined || loadingBar.default === 1 ? (
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<CircularProgress />
						</div>
					) : (
						<div>{!authedUser ? <Login /> : <PrivateApp />}</div>
					)}
				</Fragment>
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
