import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { handleInitialData } from './actions/shared';
import Home from './components/Home';
import NewQuestion from './components/NewQuestion';
import './App.css';
import UnansweredQuestion from './components/UnansweredQuestion';

class App extends Component {
	componentDidMount () {
		this.props.dispatch(handleInitialData());
	}

	render() {
		//const { classes } = this.props;
		console.log('App.js', this.props)
		return (
			<Fragment>
				<CssBaseline />
				<div>
					{this.props.loadingBar.default === 1
						? <CircularProgress />
						// : <Home />
						//: <NewQuestion />
						: <UnansweredQuestion id='6ni6ok3ym7mf1p33lnez'/>
					}
				</div>
		  	</Fragment>
		);
	}
}

function mapStateToProps ({ loadingBar }) {
	return {
		loadingBar
	}
}

export default connect(mapStateToProps)(App);