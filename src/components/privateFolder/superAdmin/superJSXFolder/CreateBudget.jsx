import React, { useContext, useEffect, useState } from 'react';
import '../superCSSFolder/CreateBudget.css';
import { RiDeleteBinLine } from 'react-icons/ri';
// import { FaEdit } from 'react-icons/fa';
import Modal from './Modal';
import axios from 'axios';
import ExpenseModal from './ExpenseModal';
import { FcApprove } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import { Link } from 'react-router-dom';


const CreateBudget = () => {
  const [showApproved, setShowApproved] = useState(false)
  const [showInput, setShowInput] = useState(false);
  // const [showExpenseModal, setShowExpenseModal] = useState(false);
  // const [budgetId, setBudgetId] = useState('');
  const [budgets, setBudgets] = useState([]);
  const [budgetBalance, setBudgetBalance] = useState('')
  const [amountSpent, setAmountSpent] = useState('')
  const [amountLoading, setAmountLoading] = useState(false)

  const getToken = localStorage.getItem('token');

  
  const handleApproved =() =>{
    setShowApproved(!showApproved)
  }

  const handleCreate = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
  };
  

  const handleGetAllBudget = async () => {
    
    try {
      const response = await axios.get( `${url}/getAllBudgets`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      console.log("bu",response.data);

      if (response.data) {
        setBudgets(response.data); 
        handleCancel();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const url = 'https://finsworthpro.onrender.com/api';

  const approvedBudget = async (id)=>{
    console.log(id)
    try {
      const response = await axios.put(`${url}/approve/${id}`,{data:""}, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      console.log(response.data);

      if (response.data) {
        // setBudgets(response.data); 
        // handleCancel();
        handleGetAllBudget()
      }
      Swal.fire({
        title: 'Budget Approved!',
        text: `${response.data.message}`,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'error!',
        // title: errorMessage,
        title: errorMessage,
        color: 'red'
      })
      console.error(error);
    }
  }

  useEffect(() => {
    (async()=>{
      setAmountLoading(true)
      try {
      const response = await axios.get( `${url}/amountSpent`);
      console.log(response.data);

      if (response.data) {
        setAmountSpent(response.data); 
        console.log(amountLoading)
      }
      setAmountLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setAmountLoading(false)
    }})()

    handleGetAllBudget();
  }, []);

  // console.log(budgetId);

  return (
    <div className='createBudgetBody'>
      <div className="createBudgetTop">

        <div className="createHeaderLeft">
          <section className='allCreateBudgetHeader'>
            <p>Total Budget</p>
            <span>₦ 100,000</span>
          </section>

          <section className='CreateBudgetHeaderLeftOne'>
            <p>Amount Spent</p>
            <span>₦ 10,000</span>
          </section>

          <section className='CreateBudgetHeaderLeftTwo'>
            <p>Budget Balance</p>
            <span>₦ 20,000</span>
          </section>
        </div>

        <div className="createHeaderRight">
          <article className="createBudget" onClick={handleCreate}>
              <p>Create +</p>
            </article>
        </div>
      </div>


      <div className="createBudgetDown">
        <section className="createBudgetDownHeader">
          <p>Amount</p>
          <span>Budget Type</span>
          <p>Status</p>
          <p>Approved</p>
        </section>

          {/* <ExpenseModal /> */}

          {/* {
            showExpenseModal && <ExpenseModal onClose={() => setShowExpenseModal(false)} budgetId={budgetId}/>
          } */}
          
          {showInput && <Modal handleCancel={() => handleCancel()} handleGetAllBudget={handleGetAllBudget} />}

            <div className="showBudgetCreatedWrap">
              {budgets?.budgets?.length > 0 ? (
                budgets?.budgets?.map((budget) => (
                  <div className="showBudgetCreated" key={budget._id}>
                    
                    <section className="budgetAmount">
                      <h4>₦ {budget.amount}</h4>
                    </section>

                    <section className="budgetType">
                      <span>{budget.budgetType}</span>
                    </section>
                    
                      
                    <div className="showBudgetRmv" >
                      {
                        budget?.approvedByDirector? <FcApprove onClick={""}/>:<FcDisapprove onClick={()=>approvedBudget(budget._id)}/>
                      }
                    </div>
                    
                    <div className="budgetCategory"></div>

                    {
                      budget?.approvedByDirector? <Link className="expenseButton" to={`/adminexpenses/${budget._id}`}>
                      <p style={{color: "green"}}>Add Expense</p>
                      </Link> :
                      <div className="expenseButtonP">
                        <p style={{color: "red"}}>Pending...</p>
                      </div>
                        
                    }
                    
                  </div>
                ))
              ) : 
              (
                <p key="no-budgets-message" style={{color: "red", fontSize: "1.5rem"}}> Loading...</p>
              )
              }
            </div>


        </div>
    </div>
  )
}

export default CreateBudget