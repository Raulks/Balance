import React, {Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'


const Question = ({saveBudget, saveLeft, updateQuestion}) => {

    const [amount , saveAmount] = useState(0);
    const [error , saveError] = useState(false)
    const defineBudget = e => {
        saveAmount(parseInt(e.target.value, 10))
    }

    const addBudget = e => {
        e.preventDefault();

        if(amount < 1 || isNaN(amount)){
            saveError(true)
            return;
        }

        saveError(false)
        saveBudget(amount);
        saveLeft(amount);
        updateQuestion(false);
    }

    return (  
        <Fragment>
            <h2>Insert your budget</h2>
            {error ? <Error message='Budget is not correct'/> : null}
            <form
                onSubmit = {addBudget}
            >
                <input
                    type ='number'
                    className = 'u-full-width'
                    placeholder = '1.000.000€'
                    onChange = {defineBudget}
                />
                <input
                    type = 'submit'
                    className = 'button-primary u-full-width'
                    value = 'Define budget'
                />
            </form>
        </Fragment>
    );
}
 
Question.propTypes ={
    saveBudget: PropTypes.func.isRequired,
    saveLeft: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}

export default Question;
