import React, { useEffect, useState } from 'react';
import '../superCSSFolder/ExpenseModal.css';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';

const ExpenseModal = ({ isOpen, onClose, budgetId }) => {
  console.log(budgetId)

  const [isLoading, setIsLoading] = useState(false);

  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: 0,
    description: '',
    budgetId
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmitExpenses = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const url = `https://finsworthpro.onrender.com/api/create-expenses/${budgetId}`;
    

      const response = await axios.post(url, newExpense);
      
      console.log(response.data);
      onClose()
    } catch (error) {
      console.error('Error adding expense:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    console.log(isLoading)
  },[isLoading])

  return (
    <div className={`modal1 ${isOpen ? 'open' : ''}`}>
      <div className="modal1-content">
        <span className="close1" onClick={onClose}>&times;</span>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmitExpenses}>
          <input
            type="text"
            name="description"
            value={newExpense.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            placeholder="Amount"
            required
          />
         
          <input name="category"
            value={newExpense.category}
            onChange={handleInputChange}required style={{margin: "10px 0",  padding: "10px"}}/>
          <button type="submit">
            {isLoading ?
              <CirclesWithBar
                height="30"
                width="30"
                color="#219EBC"
                outerCircleColor="#FB8500"
                innerCircleColor="#219EBC"
                barColor="#219EBC"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              /> :
              "Add Expenses"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;
