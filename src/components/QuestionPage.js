import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

class QuestionPage extends Component {

    render () {
        const { answered, id } = this.props;

        console.log('QuestionPage', this.props);

        if ( answered ) {
            return <AnsweredQuestion id={id} />;
        } else {
            return <UnansweredQuestion id={id} />;
        }

    }
}

function mapStateToProps ({ authedUser, users }, { id }) {
    console.log('QuestionPage', authedUser)
    const answered = users[authedUser].answers.hasOwnProperty(id) ? true : false;

    return {
        answered
    };
}

export default connect(mapStateToProps)(QuestionPage);