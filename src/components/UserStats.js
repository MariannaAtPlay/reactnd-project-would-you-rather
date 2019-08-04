import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';

class UserStats extends Component {
	render() {
		const { user } = this.props;
		const { name, avatarURL, answers, questions } = user;

		return (
			//TODO: move the styles to the theme
			<Card
				style={{
					width: '50%',
					margin: '1em auto',
					padding: '1em',
					display: 'block'
				}}
			>
				<CardContent>
					<Avatar alt={name} src={avatarURL} />
					<Typography component="p">
						{name} <br />
						Answered Questions: {Object.keys(answers).length} <br />
						Created Questions: {questions.length} <br />
						Score: {Object.keys(answers).length + questions.length}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(withTheme()(UserStats));
