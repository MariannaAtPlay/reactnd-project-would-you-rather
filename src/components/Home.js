import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import BriefQuestionsList from './BriefQuestionsList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Home extends Component {
    state = {
    	value: 0,
  	};

	handleChange = (event, value) => {
    	this.setState({ value });
	};

    render () {
        const { answeredQuestionIds, unansweredQuestionIds, classes } = this.props;
    	const { value } = this.state;

return (
      <div className={classes.root}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        {value === 0 && <BriefQuestionsList 
        	idsList={unansweredQuestionIds}
        	emptyListNote='No more Unswered Questions! Time to create some new ones! '
		/>}
        {value === 1 && <BriefQuestionsList 
        	idsList={answeredQuestionIds}
        	emptyListNote='No Answered Questions yet! What are you waiting for???'
		/>}
      </div>
    );
	}
}

function mapStateToProps ({ authedUser, questions, users }) {
    const answeredQuestionIds = Object.keys(questions)
        .filter((id) => users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    const unansweredQuestionIds = Object.keys(questions)
        .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        answeredQuestionIds,
        unansweredQuestionIds
    }
}

//export default connect(mapStateToProps)(withStyles(styles)(App));
export default connect(mapStateToProps)(withStyles(styles)(Home));