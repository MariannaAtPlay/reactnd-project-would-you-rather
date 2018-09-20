import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import UserStats from './UserStats';

class LeaderBoard extends Component {
    render () {

        return (
            <div>
                <Typography variant='headline' component='h2' align='center'>
                    LeaderBoard
                </Typography>
                {this.props.userIDs.map((id) => (
                    <UserStats key={id} id={id} />
                ))}
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    //sort UserIDs by the score for each user, desc
    const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
        const scoreA = Object.keys(users[idA].answers).length + users[idA].questions.length;
        const scoreB = Object.keys(users[idB].answers).length + users[idB].questions.length;

        return scoreB - scoreA;
    });

    return {
        userIDs: sortedUserIDs
    }
}

export default connect(mapStateToProps)(LeaderBoard);