import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { handleInitialData } from './actions/shared';
import Home from './components/Home';
import NewQuestion from './components/NewQuestion';
import './App.css';
import UnansweredQuestion from './components/UnansweredQuestion';
import AnsweredQuestion from './components/AnsweredQuestion';
import QuestionPage from './components/QuestionPage';
import LeaderBoard from './components/LeaderBoard';
import Login from './components/Login';
import Nav from './components/Nav';

class App extends Component {
	componentDidMount () {
		this.props.dispatch(handleInitialData());
	}

	render() {
		//const { classes } = this.props;
		const { loadingBar, authedUser } = this.props;

		return (
			<Router>
				<Fragment>
					<CssBaseline />
					<div>
						{!authedUser 
							? <Login />
							: (
								<div>
									{loadingBar.default === undefined || loadingBar.default === 1
									? <CircularProgress />
									:	<div>
											<Nav />
											<Route path='/' exact component={Home} />
											<Route path='/questions/:id' component={QuestionPage} />
											<Route path='/add' component={NewQuestion} />
											<Route path='/leaderboard' component={LeaderBoard} />

										</div>
									//: <Home />
									//: <NewQuestion />
									//: <UnansweredQuestion id='6ni6ok3ym7mf1p33lnez'/>
									//: <AnsweredQuestion id='vthrdm985a262al8qx3do'/>
									//: <QuestionPage id='6ni6ok3ym7mf1p33lnez' />
									//: <LeaderBoard />
									}	
								</div>
							)
						}

					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps ({ loadingBar, authedUser }) {
	return {
		loadingBar,
		authedUser
	}
}

export default connect(mapStateToProps)(App);