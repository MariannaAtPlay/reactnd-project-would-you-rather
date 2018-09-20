import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../utils/helpers';
import PageNotFound from './PageNotFound';

class AnsweredQuestion extends Component {

    render () {
        const { question, author, authedUser } = this.props;

        if (question === null) {
            return <PageNotFound />;
        }

        const { optionOne, optionTwo, timestamp } = question;
        const { name, avatarURL } = author;
        const totalVotes = optionOne.votes.length + optionTwo.votes.length;

        return (
            <Card style={{
                width: '50%',   
                margin: '1em auto',
                padding: '1em',
                display: 'block',
            }}>
                <CardContent>
                    <Avatar
                        alt={name}
                        src={avatarURL}
                    />
					<Typography component='div'>
                    {name} asks:
                    Would you rather...<br />
                    <ul>
                        <li>
                            {optionOne.text} 
                            {optionOne.votes.includes(authedUser) 
                                ? <span style={{color:'red'}}> &lt;- Your choice</span> 
                                : null}
                        </li>
                        chosen by {optionOne.votes.length} out of {totalVotes} users <br />
                        which is {Math.round(optionOne.votes.length / totalVotes * 100)}% <br /> 
                        <li>
                            {optionTwo.text} 
                            {optionTwo.votes.includes(authedUser) 
                                ? <span style={{color:'red'}}> &lt;- Your choice</span> 
                                : null}
                        </li>
                        chosen by {optionTwo.votes.length} out of {totalVotes} users <br />
                        which is {Math.round(optionTwo.votes.length / totalVotes * 100)}%
                    </ul>
                    Asked at {formatDate(timestamp)}
                    </Typography>
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