import React, { useContext, useEffect, useState } from 'react';
import '../superCSSFolder/CreateBudget.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Modal from './Modal';




const CreateBudget = () => {
  const [showInput, setShowInput] = useState(false);
  const [budgets, setBudgets] = useState([]);

  const getToken = JSON.parse(localStorage.getItem('token'));
  console.log(getToken);

  console.log(budgets);

  const handleCreate = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
  };

// const url = 'https://finsworthpro.onrender.com/api/getAllBudgets';

//   const handleGetAllBudget = async () => {
    
//     try {
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${getToken}`,
//         },
//       });
//       console.log(response);

//       if (response.data) {
//         setBudgets(response.data); 
//         handleCancel();
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

  // useEffect(() => {
  //   handleGetAllBudget();
  // }, []);

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

  <div className="showBudgetCreatedWrap">
  {budgets.length > 0 ? (
  budgets.map((budget) => (
    <div className="showBudgetCreated" key={budget.id}>
      <h4>₦ {budget.amount}</h4>
      <span>{budget.budgetType}</span>
      <div className="showBudgetRmv">
        <RiDeleteBinLine/>
        <FaEdit/>
      </div>
    </div>
  ))
) : (
  <p>No budgets available</p>
)}
  </div>

  {showInput && <Modal handleCancel={() => handleCancel()} />}
</div>
    </div>
  )
}

export default CreateBudget
