import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        e.preventDefault();

		this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true
        },
       () => dispatch(handleAddQuestion(optionOne, optionTwo)));
    }

    render () {
        const { optionOne, optionTwo, toHome } = this.state;

        if (toHome === true) return <Redirect to='/' />

        return (
            <form onSubmit={this.handleSubmit}>
				<Typography variant='headline' component='h2' align='center'>
                        Create New Question 
				</Typography>
                <Card style={{
                width: '50%',   
                margin: '1em auto',
                padding: '1em',
                display: 'block',
            }}>
                    <CardContent>
                        Would you rather...<br />
                        <input
                            name='optionOne'
                            type='text'
                            value={optionOne}
                            onChange={this.handleInputChange} />
                        <p>OR</p>
                        <input
                            name='optionTwo'
                            type='text'
                            value={optionTwo}
                            onChange={this.handleInputChange} />
                    </CardContent>
                    <CardActions>
                        <button 
                            onClick={this.handleSubmit} 
                            type='submit'
                            disabled={optionOne === '' || optionTwo === ''}>
                            Submit
                        </button>
                    </CardActions>
                </Card>
            </form>
        );
    }
}



export default connect()(NewQuestion);