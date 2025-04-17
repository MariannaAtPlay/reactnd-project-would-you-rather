let users = {
	sarahedo: {
		id: 'sarahedo',
		name: 'Sarah Edo',
		avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
		answers: {
			'8xf0y6ziyjabvozdd253nd': 'optionOne',
			'6ni6ok3ym7mf1p33lnez': 'optionOne',
			am8ehyc8byjqgar0jgpub9: 'optionTwo',
			loxhs1bqm25b708cmbf3g: 'optionTwo'
		},
		questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
	},
	davidhh: {
		id: 'davidhh',
		name: 'David Heinemeier Hansson ',
		avatarURL: 'https://m.media-amazon.com/images/I/71P6nFB3sGL._SY600_.jpg',
		answers: {
			vthrdm985a262al8qx3do: 'optionOne',
			xj352vofupe1dqz9emx13r: 'optionTwo'
		},
		questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
	},
	jasonf: {
		id: 'jasonf',
		name: 'Jason Fried',
		avatarURL: 'https://m.media-amazon.com/images/I/61ptq-euwzL._SX375_CR0%2C0%2C375%2C375_.jpg',
		answers: {
			xj352vofupe1dqz9emx13r: 'optionOne',
			vthrdm985a262al8qx3do: 'optionTwo',
			'6ni6ok3ym7mf1p33lnez': 'optionOne'
		},
		questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
	}
};

let questions = {
	'8xf0y6ziyjabvozdd253nd': {
		id: '8xf0y6ziyjabvozdd253nd',
		author: 'jasonf',
		timestamp: 1744857600000,
		optionOne: {
			votes: ['sarahedo'],
			text: 'big tech'
		},
		optionTwo: {
			votes: [],
			text: 'small tech'
		}
	},
	'8xf0y6ziyjabvozdd253ss': {
		id: '8xf0y6ziyjabvozdd253ss',
		author: 'sarahedo',
		timestamp: 1744857600000,
		optionOne: {
			votes: [],
			text: 'champion Startups'
		},
		optionTwo: {
			votes: [],
			text: 'champion Stayups'
		}
	},
	'8xf0y6ziyjabvozdd253hh': {
		id: '8xf0y6ziyjabvozdd253ss',
		author: 'sarahedo',
		timestamp: 1744857600000,
		optionOne: {
			votes: [],
			text: 'JOMO'
		},
		optionTwo: {
			votes: [],
			text: 'FOMO'
		}
	},
	'6ni6ok3ym7mf1p33lnez': {
		id: '6ni6ok3ym7mf1p33lnez',
		author: 'davidhh',
		timestamp: 1744857600000,
		optionOne: {
			votes: [],
			text: 'go for independence'
		},
		optionTwo: {
			votes: ['davidhh', 'sarahedo'],
			text: 'play it safe'
		}
	},
	am8ehyc8byjqgar0jgpub9: {
		id: 'am8ehyc8byjqgar0jgpub9',
		author: 'jasonf',
		timestamp: 1744857600000,
		optionOne: {
			votes: [],
			text: 'respond ASAP'
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'take time for a thoughtful response'
		}
	},
	loxhs1bqm25b708cmbf3g: {
		id: 'loxhs1bqm25b708cmbf3g',
		author: 'davidhh',
		timestamp: 1744857600000,
		optionOne: {
			votes: [],
			text: 'sell a good product'
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'sell customers\' personal information'
		}
	},
	vthrdm985a262al8qx3do: {
		id: 'vthrdm985a262al8qx3do',
		author: 'davidhh',
		timestamp: 1744857600000,
		optionOne: {
			votes: ['davidhh'],
			text: 'put off, push away, or otherwise delay'
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'take imperfect action now'
		}
	},
	xj352vofupe1dqz9emx13r: {
		id: 'xj352vofupe1dqz9emx13r',
		author: 'jasonf',
		timestamp: 1744857600000,
		optionOne: {
			votes: ['davidhh'],
			text: 'work in 6 week cycles'
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'plan for the whole year'
		}
	}
};

function generateUID() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
}

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000);
	});
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...questions }), 1000);
	});
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText
		},
		optionTwo: {
			votes: [],
			text: optionTwoText
		}
	};
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestion(question);

		setTimeout(() => {
			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion
			};

			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([formattedQuestion.id])
				}
			};

			res(formattedQuestion);
		}, 1000);
	});
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer
					}
				}
			};

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser])
					}
				}
			};

			res();
		}, 500);
	});
}
