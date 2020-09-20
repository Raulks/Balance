import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { checkBudget } from '../helpers'

const BudgetControl = ({budget, left}) => {
    return (  
        <Fragment>
            <div className='alert alert-primary'>
                Budget: € {budget}
            </div>
            <div className={checkBudget(budget, left)}>
                Left: € {left}
            </div>
        </Fragment>
    );
}

BudgetControl.propTypes ={
    budget: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
} 

export default BudgetControl;