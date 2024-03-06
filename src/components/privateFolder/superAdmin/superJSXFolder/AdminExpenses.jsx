import React, { useEffect, useState } from 'react';
import '../superCSSFolder/AdminExpenses.css';
import ExpenseModal from './ExpenseModal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AdminExpenses = () => {
  const [showInput, setShowInput] = useState(false);
  const [expenses, setExpenses] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://finsworthpro.onrender.com/api`

  const {id} = useParams()
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
  


  const handleGetAllExpenses = async () => {
    const getToken = localStorage.getItem('token')
    try {
      setIsLoading(true)
      const response = await axios.get(`${url}/get-expenses/${id}`);
      
      if (response.data) {
        setExpenses(response.data); 
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    useEffect(()=>{
      handleGetAllExpenses()
    },[])
    useEffect(()=>{
      console.log(expenses)
    },[expenses])

    useEffect(()=>{
      console.log(isLoading)
    },[isLoading])
  return (
    <div className='adminExpensesBody'>
      <div className="adminExpensesBodyUp">
        
          <button onClick={handleCreate}>Add Expense</button>
      </div>

      {showInput && (
        <ExpenseModal 
          onClose={handleCloseModal} 
          onSubmit={handleSubmitExpense}
          budgetId={id}
        />
      )}

      <div className="adminExpensesBodyDown">
        <div className="expenseCreatedHeader">
        <h5>Category</h5>
          <p>Amount</p>
          <span>Description</span>
          <h4>Date</h4>
        </div>

       <div className="expenseCreated">
       { expenses?.expenses?.map((expenses)=>(
          <article className="mappedExpenses" key={expenses.id}>
          <h5>{expenses.category}</h5>
          <p>{expenses.amount}</p>
          <span>{expenses.description}</span>
          <h4>{expenses.date}</h4>
        </article>
        ))}
       </div>

      </div>
    </div>
  );
};

export default AdminExpenses;
