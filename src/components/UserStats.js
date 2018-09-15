import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class UserStats extends Component {

    render () {
        const { user } = this.props;
        const { name, avatarURL, answers, questions } = user;
        console.log('UserStats', this.props);

        return (
            <Card>
                <CardContent>
                    <Avatar
                        alt={name}
                        src={avatarURL}
                    />
                    {name} 
                    <p>Answered Question: {Object.keys(answers).length}</p>
                    <p>Created Questions: {questions.length}</p>
                    Score: {Object.keys(answers).length + questions.length}
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps ({ users }, { id }) {

    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(UserStats);