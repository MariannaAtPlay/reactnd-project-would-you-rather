import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import BriefQuestionsList from './BriefQuestionsList';

class Home extends Component {
    
    render () {
        const { answeredQuestionIds, unansweredQuestionIds } = this.props;

        return (
            <div>
				<BriefQuestionsList 
          			title='Answered Questions'
          			idsList={answeredQuestionIds}
          			emptyListNote='No Answered Questions yet! What are you waiting for???'
				/>

				<BriefQuestionsList 
          			title='Unanswered Questions'
          			idsList={unansweredQuestionIds}
          			emptyListNote='No more Unswered Questions! Time to create some new ones! '
				/>
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

export default connect(mapStateToProps)(Home);