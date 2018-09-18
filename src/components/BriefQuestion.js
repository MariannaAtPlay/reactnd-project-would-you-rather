import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { formatDate } from '../utils/helpers';

class BriefQuestion extends Component {

    render () {
        const { question, author } = this.props;
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
                <Link to={`/questions/${id}`} >
                    <button>View Question</button>
                </Link>
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