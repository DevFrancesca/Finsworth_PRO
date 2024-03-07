import {React, useEffect, useState} from 'react'
import '../superCSSFolder/AdminDashboard.css'
import { useNavigate } from 'react-router-dom'
import {Bar} from "react-chartjs-2";
import { Chart } from "chart.js/auto"
import { Expense } from '../../../../data';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const AdminDashboard = () => {

    const navigate = useNavigate()
    
  const expenses = () => {
    navigate('/adminexpenses')
  }
    const label = Expense.map ((e)=>e.month)
    const dataset = Expense.map ((e)=>e.amount)
    console.log(dataset, label, "My dataset")

    const {_id} = useParams
    console.log(_id);


  // const [totalBudget, setTotalBudget] = useState(0);
  // const [amountSpent, setAmountSpent] = useState(0);
  const [budgetBalance, setBudgetBalance] = useState(0);
  // const budgetId = 

  useEffect(() => {
    const fetchBudgetBalance = async () => {
      try {
        const response = await axios.get(`https://finsworthpro.onrender.com/api/budgetBalance/:${_id}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            budgetId: budgetId
          }
        });
        console.log(response);
        if (response.status === 200) {
          setBudgetBalance(response.data.remainingBalance);
        } else {
          throw new Error('Failed to fetch budget balance');
        }
      } catch (error) {
        console.error('Error fetching budget balance:', error);
      }
    };
  
    fetchBudgetBalance();
   const token = localStorage.getItem('token')
    !token ? navigate('/') : null
  }, []);
  // useEffect(()=>{}[])
  return (
    <div className='adminBody'>
      <section className="adminBodyLeft">

        {/* <div className="adminBodyLeftTop">
        <section className='totalBudget'>
        <p>Total Budget</p>
        <span>₦ 100,000</span>
      </section>

      <section className='amountSpent'>
        <p>Amount Spent</p>
        <span>₦ 10,000</span>
      </section>

      <section className='budgetBalance'>
        <p>Budget Balance</p>
        <span>₦ 20,000</span>
      </section>
        </div> */}

        <div className="adminBodyLeftMid">
          < Bar data={{labels:label, datasets:[{label:"Expenses", data:dataset,}]}}/>
        </div>

        <div className="adminBodyLeftDown">
          {/* <h4 onClick={expenses}>CATEGORY EXPENSES</h4>
          <div className="adminHistory">
            <p>Salary</p>
            <p>₦20,000</p>
            <p>Employee's Salary</p>
            <p>BudgetId</p>
          </div> */}
        </div>
      </section>

      <section className="adminBodyRight"></section>
    </div>
  )
}

export default AdminDashboard

// const fetchTotalBudget = async () => {
    //   try {
    //     const response = await axios.get('https://finsworthpro.onrender.com/api/totalBudget');
    //     if (response.status === 200) {
    //       setTotalBudget(response.data.totalBudget);
    //     } else {
    //       throw new Error('Failed to fetch total budget');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching total budget:', error);
    //   }
    // };

    // const fetchAmountSpent = async () => {
    //   try {
    //     const response = await axios.get('https://finsworthpro.onrender.com/api/amountSpent', {
    //       params: { budgetId }
    //     });
    //     if (response.status === 200) {
    //       setAmountSpent(response.data.totalAmountSpent);
    //     } else {
    //       throw new Error('Failed to fetch amount spent');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching amount spent:', error);
    //   }
    // };