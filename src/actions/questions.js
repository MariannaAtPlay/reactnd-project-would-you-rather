import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

//async action creator
export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()));
    }
}