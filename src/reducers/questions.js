import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
      	case ADD_ANSWER: 
        	const { qid, answer, authedUser } = action.answerInfo;
        
        	return {
                ...state,
                [qid]: {
                  ...state[qid],
                  [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                  }
                }
              }
        default: 
            return state;
    }
}

   /*  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
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
      }

 questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }
      */