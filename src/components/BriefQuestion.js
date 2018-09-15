import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { formatDate } from '../utils/helpers';

class BriefQuestion extends Component {
    toQuestionPage = (e, id) => {
        e.preventDefault();
        //TODO: redirect to QuestionPage
    }

    render () {
        const { question, author } = this.props;
        console.log('BriefQuestion', this.props);

        const { optionOne, timestamp, id } = question;
        const { name, avatarURL } = author;

        return (
            <Card>
                <CardContent>
                    <Avatar
                        alt={name}
                        src={avatarURL}
                    />
                    {name} asks:
                    <p>Would you rather...</p>
                    <p>{optionOne.text.slice(0, 30)}...</p>
                    <p>{formatDate(timestamp)}</p>
                </CardContent>
                <CardActions>
                    <button onClick={(e) => this.toQuestionPage(e, id)}>View Question</button>
                </CardActions>
            </Card>
        );
    }
}

function mapStateToProps ({ questions, users }, { id }) {
    const question = questions[id];

    return {
        question: question
            ? question
            : null,
        author: question 
            ? users[question.author] 
            : null
    }
}

export default connect(mapStateToProps)(BriefQuestion);