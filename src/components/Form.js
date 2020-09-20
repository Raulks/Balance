import React, { useState } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid';
import Error from './Error'


const Form = ({saveExpense, saveCreateExpense}) => {

    const [name,saveName] = useState('');
    const [amount, saveAmount] = useState();
    const [error, saveError] = useState(false);

    const addExpense = e => {
        e.preventDefault();

        if (amount <1 || isNaN (amount) || name.trim() === ''){
            saveError(true);
            return;
        }
        saveError(false);
            
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        saveExpense(expense);
        saveCreateExpense(true);

        saveName('');
        saveAmount('');
    }

    return ( 
        <form
            onSubmit = {addExpense}
        >
            <h2>Add your expenses here</h2>
            { error ? <Error message='Complete mandatory fields'/> : null }
            <div className='campo'>
                <label>Expenses concept</label>
                <input
                    type = 'text'
                    className = 'u-full-width'
                    placeholder = 'Eg. transport'
                    value ={name}
                    onChange ={e => saveName(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Amount</label>
                <input
                    type = 'number'
                    className = 'u-full-width'
                    placeholder = '200€'
                    value = {amount}
                    onChange = {e => saveAmount(parseInt(e.target.value) )}
                />
            </div>

                <input
                    type = 'submit'
                    className = 'button-primary u-full-width'
                    value = 'add expenses'
                />
        </form>
     );
}
 
Form.propTypes ={
    saveExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}

export default Form;