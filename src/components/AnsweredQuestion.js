import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { formatDate } from '../utils/helpers';

class AnsweredQuestion extends Component {

    render () {
        const { question, author, authedUser } = this.props;

        if (question === null) {
            return <p>This question doesn't exist</p>;
        }

        const { optionOne, optionTwo, timestamp, id } = question;
        const { name, avatarURL } = author;
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;

        return (
            <Card>
                    <CardContent>
                        <Avatar
                            alt={name}
                            src={avatarURL}
                        />
                        {name} asks:
                        <p>Would you rather...</p><br />
                        <ul>
                            <li>
                                {optionOne.text} 
                                {optionOne.votes.includes(authedUser) 
                                    ? <span style={{color:'red'}}> &lt;- Your choice</span> 
                                    : null}
                            </li>
                            <p>
                            chosen by {optionOne.votes.length} out of {totalVotes} users <br />
                            which is {Math.round(optionOne.votes.length / totalVotes * 100)}% <br /> 
                            </p>
                            <li>
                                {optionTwo.text} 
                                {optionTwo.votes.includes(authedUser) 
                                    ? <span style={{color:'red'}}> &lt;- Your choice</span> 
                                    : null}
                            </li>
                            <p>
                            chosen by {optionTwo.votes.length} out of {totalVotes} users <br />
                            which is {Math.round(optionTwo.votes.length / totalVotes * 100)}%
                            </p>
                        </ul>
                        <p>Asked at {formatDate(timestamp)}</p>
                    </CardContent>
            </Card>
        );
    }
}

function mapStateToProps ({ questions, users, authedUser }, { id }) {
    const question = questions[id];

    return {
        question: question
            ? question
            : null,
        author: question 
            ? users[question.author] 
            : null,
        authedUser
    }
}

export default connect(mapStateToProps)(AnsweredQuestion);