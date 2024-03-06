import React, { useState } from 'react';
import '../superCSSFolder/AdminExpenses.css';
import ExpenseModal from './ExpenseModal';
import axios from 'axios';

const AdminExpenses = () => {
  const [showInput, setShowInput] = useState(false);
  const [expenses, setExpenses] = useState([])

  const handleCreate = () => {
    setShowInput(true);
  };

  const handleCloseModal = () => {
    setShowInput(false);
  };

  const handleSubmitExpense = (expenseData) => {
    console.log('Expense Data:', expenseData);
    setShowInput(false); 
  };

  const url = 'https://finsworthpro.onrender.com/api/get-all-expenses'

  const handleGetAllExpenses = async () => {
    
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      console.log(response);

      if (response.data) {
        setExpenses(response.data); 
        handleCancel();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='adminExpensesBody'>
      <div className="adminExpensesBodyUp">
        
          <button onClick={handleCreate}>Add Expense</button>
        
      </div>

      {showInput && (
        <ExpenseModal 
          onClose={handleCloseModal} 
          onSubmit={handleSubmitExpense} 
        />
      )}

      <div className="adminExpensesBodyDown">
        <article className="expenseCreated">
          <h5>Category</h5>
          <p>Amount</p>
          <span>Description</span>
          <h4>BudgetID</h4>
        </article>
      </div>
    </div>
  );
};

export default AdminExpenses;
