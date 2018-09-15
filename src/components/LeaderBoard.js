import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserStats from './UserStats';

class LeaderBoard extends Component {
    render () {
        console.log('LeaderBoard', this.props);
        return (
            <div>
                <h3>LeaderBoard</h3>
                <ul>
                    {this.props.userIDs.map((id) => (
                        <UserStats key={id} id={id} />
                    ))}
                </ul>
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