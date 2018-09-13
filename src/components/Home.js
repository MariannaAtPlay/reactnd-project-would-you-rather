import React, { Component } from 'react';
import { connect } from 'react-redux';
import BriefQuestion from './BriefQuestion';

class Home extends Component {
    render () {
        console.log('Home', this.props);
        return (
            <div>
                <h3>Answered Questions</h3>
                <ul>
                    {this.props.answeredQuestionIds.map((id) => (
                        <BriefQuestion key={id} id={id} />
                    ))}
                </ul>
                <h3>Unanswered Questions</h3>
                <ul>
                    {this.props.unansweredQuestionIds.map((id) => (
                        <BriefQuestion key={id} id={id} />
                    ))}
                </ul>
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