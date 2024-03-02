import React, { useState } from 'react';
import '../superCSSFolder/ExpenseModal.css'
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';


const ExpenseModal = ({ isOpen, onClose, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [newExpense, setNewExpense] = useState({
      category: '',
      amount: 0,
      description: '',
      budgetId: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({ ...newExpense, [name]: value });
  };
  // useEffect(() => {
  //   // Fetching expenses from the API when the component mounts
  //   const url = 'https://finsworthpro.onrender.com/api/create-expenses'

  //   handleSubmitExpenses();
  // }, []);
  const url = 'https://finsworthpro.onrender.com/api/create-expenses'
    

  const handleSubmitExpenses = async (event) => {
    event.preventDefault();
    onSubmit(newExpense);

    setIsLoading(true)
    try {
      const response = await axios.post(url, newExpense);
      setNewExpense([...expenses, response.data]);
      setNewExpense({
        category: '',
        amount: 0,
        description: '',
        budgetId: ''
      });
      setIsLoading(false)
      console.log(response.data)
  
    } catch (error) {
      console.error('Error adding expense:', error);
    }
   
  };

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
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            required
          />
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