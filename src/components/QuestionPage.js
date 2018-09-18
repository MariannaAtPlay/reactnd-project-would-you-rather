import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

class QuestionPage extends Component {

    render () {
        const { autherUserAnsweres, match } = this.props;
        const id = match.params.id;
        const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

        if ( answered ) {
            return <AnsweredQuestion id={id} />;
        } else {
            return <UnansweredQuestion id={id} />;
        }

    }
}

function mapStateToProps ({ authedUser, users }) {
    const autherUserAnsweres = users[authedUser].answers;

    return {
        autherUserAnsweres
    };
}

export default connect(mapStateToProps)(QuestionPage);