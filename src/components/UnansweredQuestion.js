import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { handleAddAnswer } from '../actions/questions';
import { formatDate } from '../utils/helpers';

class UnansweredQuestion extends Component {
  	state = {
      errorMsg: ''
    }

    handleSubmit = (id, e) => {
        e.preventDefault();
      	const answer = this.form.answer.value;
      	const { dispatch } = this.props;
      
        if (answer !== '') {
        	console.log('handleSubmit', answer);
          //TODO: Redirect to answerred question
          dispatch(handleAddAnswer(id, answer));
        } else {
          this.setState({errorMsg: 'You must make a choice'});
        }
    }

    render () {
        const { question, author } = this.props;
        console.log('UnansweredQuestion', this.props);
        if (question === null) {
            return <p>This question doesn't exist</p>;
        }

        const { optionOne, optionTwo, timestamp, id } = question;
        const { name, avatarURL } = author;
		const { errorMsg } = this.state;

        return (
            <Card>
                <form onSubmit={(e) => this.handleSubmit(id, e)} ref={(f) => this.form = f}>
                    <CardContent>
                        <Avatar
                            alt={name}
                            src={avatarURL}
                        />
                        {name} asks:
                        <p>Would you rather...</p><br />
						{errorMsg ? <p><span style={{color:'red'}}>{errorMsg}</span><br /></p> : null}
                        <input type="radio" value='optionOne' name="answer" /> {optionOne.text}<br />
                        <input type="radio" value='optionTwo' name="answer" /> {optionTwo.text}<br />
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