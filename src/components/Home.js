import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import BriefQuestion from './BriefQuestion';

class Home extends Component {
    
    render () {
        const { answeredQuestionIds, unansweredQuestionIds } = this.props;

        return (
            <div>
                <Typography variant='headline' align='center'>
                    Answered Questions
                </Typography>
                {
                    answeredQuestionIds.length
                        ? answeredQuestionIds.map((id) => (
                            <BriefQuestion key={id} id={id} />
                        ))
                        : <Typography component='p' align='center'>
                            No Answered Questions yet! What are you waiting for???
                        </Typography>
                }

                <Typography variant='headline' align='center'>
                    Unanswered Questions
                </Typography>
                {
                    unansweredQuestionIds.length
                        ? unansweredQuestionIds.map((id) => (
                            <BriefQuestion key={id} id={id} />
                        ))
                        : <Typography component='p' align='center'>
                            No more Unswered Questions! Time to create some new ones! 
                          </Typography>
                }
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