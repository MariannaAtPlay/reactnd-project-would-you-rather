import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { formatDate } from '../utils/helpers';

class BriefQuestion extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, timestamp, id } = question;
		const { name, avatarURL } = author;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Image
								src={avatarURL}
								roundedCircle
								fluid
								width="40"
								height="40"
								className="mr-2"
							/>
							{name} asks:
						</Card.Header>
						<Card.Body>
							<Card.Title className="text-muted">
								Would you rather...
							</Card.Title>
							<Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button variant="outline-dark">View Question</Button>
							</Link>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">{formatDate(timestamp)}</small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(BriefQuestion);
