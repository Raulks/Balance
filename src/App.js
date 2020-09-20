import React, { useState, useEffect } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BugdetControl'

function App() {

  const [budget, saveBudget] = useState(0);
  const [left, saveLeft] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([])
  const [expense, saveExpense] = useState({});
  const [createxpense, saveCreateExpense] = useState(false)

  useEffect(()=> {
    if(createxpense){
      saveExpenses([
      ...expenses,
      expense
    ])

    const budgetLeft = left - expense.amount;
    saveLeft(budgetLeft);
    
    saveCreateExpense(false);
  }
  }, [expense, createxpense, expenses, left])

  return (
    <div className='container'>
      <header>
      <h1>Balance</h1>
      <div className = 'contenido-principal contenido'>
        {showquestion ? 
        (
        <Question
      saveBudget = {saveBudget}
      saveLeft = {saveLeft}
      updateQuestion = {updateQuestion}
      />
      ) : 
      (
        <div className='row'>
        <div className='one-half column'>
          <Form
            saveExpense = {saveExpense}
            saveCreateExpense = {saveCreateExpense}
          />
        </div>
        <div className='one-half column'>
          <List
            expenses={expenses}
          />
          <BudgetControl
          budget = {budget}
          left = {left}
          />
        </div>
      </div>
      )
      }
      </div>
      </header>
    </div>
  );
}

export default App;
