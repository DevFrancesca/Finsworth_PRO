import React, { useContext, useEffect, useState } from 'react';
import '../superCSSFolder/CreateBudget.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Modal from './Modal';
import axios from 'axios';
import ExpenseModal from './ExpenseModal';
// import { RiAddCircleLine } from "react-icons/ri";



const CreateBudget = () => {
  const [showInput, setShowInput] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [budgetId, setBudgetId] = useState('');
  const [budgets, setBudgets] = useState([]);

  const getToken = JSON.parse(localStorage.getItem('token'));

  const handleCreate = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
  };

const url = 'https://finsworthpro.onrender.com/api/getAllBudgets';

  const handleGetAllBudget = async () => {
    
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      console.log(response);

      if (response.data) {
        setBudgets(response.data); 
        handleCancel();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleGetAllBudget();
  }, []);

  console.log(budgetId);

  return (
    <div className='createBudgetBody'>
      <div className="createBudgetTop">

        <div className="createHeaderLeft">
          <section className='allCreateBudgetHeader'>
            <p>Total Budget</p>
            <span>₦ 0.00</span>
          </section>
        </div>

        <div className="createHeaderMiddle">
          <section className='CreatedHeaderMiddleTop'>
            <h5>Jan</h5>
          </section>
          <span>1st Jan to 31st Jan</span>
        </div>

        <div className="createHeaderRight">
          <section className='CreateBudgetHeaderRightOne'>
            <p>Amount Spent</p>
            <span>₦ 0.00</span>
          </section>

          <section className='CreateBudgetHeaderRightTwo'>
            <p>Budget Balance</p>
            <span>₦ 0.00</span>
          </section>
          
          <article className="createBudget" onClick={handleCreate}>
              <p>Create +</p>
            </article>
        </div>
      </div>


      <div className="createBudgetDown">
  <section className="createBudgetDownHeader">
    <p>Budget</p>
    <span>Amount</span>
    <p>Date</p>
  </section>

  {/* <ExpenseModal /> */}

  {
    showExpenseModal && <ExpenseModal onClose={() => setShowExpenseModal(false)} budgetId={budgetId}/>
  }

<div className="showBudgetCreatedWrap">
  {budgets?.budgets?.length > 0 ? (
    budgets?.budgets?.map((budget) => (
      <div className="showBudgetCreated" key={budget.id}>
        <section className="budgetAmount">
          <h4>₦ {budget.amount}</h4>
        </section>

        <section className="budgetType">
          <span>{budget.budgetType}</span>
        </section>
        
        <div className="showBudgetRmv">
          <RiDeleteBinLine/>
          <FaEdit/>
        </div>
        <section className="expenseButton">
          <button onClick={() => { setShowExpenseModal(true); setBudgetId(budget.id) }}>Add expense</button>
        </section>
        
      </div>
    ))
  ) : (
    <p key="no-budgets-message">No budgets available</p>
  )}
</div>


  {/* <p>No budgets available</p> */}

  {showInput && <Modal handleCancel={() => handleCancel()} />}
</div>
    </div>
  )
}

export default CreateBudget
