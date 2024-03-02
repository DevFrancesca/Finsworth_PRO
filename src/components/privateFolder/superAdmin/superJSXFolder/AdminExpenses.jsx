import React, { useState } from 'react';
import '../superCSSFolder/AdminExpenses.css';
import ExpenseModal from './ExpenseModal';

const AdminExpenses = () => {
  const [showInput, setShowInput] = useState(false);

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

  return (
    <div className='adminExpensesBody'>
      <div className="adminExpensesBodyUp">
        <div className="adminUpLeft">
          <button onClick={handleCreate}>Add Expense</button>
        </div>

        <div className="adminUpRight">
          <h4>Total Expenses<span> ₦0.00</span></h4>
        </div>
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
          <h6>Budget</h6>
        </article>
      </div>
    </div>
  );
};

export default AdminExpenses;
