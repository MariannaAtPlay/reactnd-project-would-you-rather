import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { formatDate } from '../utils/helpers';

class UnansweredQuestion extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    render () {
        const { question, author } = this.props;
        console.log('UnansweredQuestion', this.props);
        if (question === null) {
            return <p>This question doesn't exist</p>;
        }

        const { optionOne, optionTwo, timestamp, id } = question;
        const { name, avatarURL } = author;

        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <CardContent>
                        <Avatar
                            alt={name}
                            src={avatarURL}
                        />
                        {name} asks:
                        <p>Would you rather...</p><br />
                        <input type="radio" name="answer" value='optionOne' /> {optionOne.text}<br />
                        <input type="radio" name="answer" value='optionTwo' /> {optionTwo.text}<br />
                        <p>Asked at {formatDate(timestamp)}</p>
                    </CardContent>
                    <CardActions>
                        <button type='submit'>Vote</button>
                    </CardActions>
                </form>
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

export default connect(mapStateToProps)(UnansweredQuestion);