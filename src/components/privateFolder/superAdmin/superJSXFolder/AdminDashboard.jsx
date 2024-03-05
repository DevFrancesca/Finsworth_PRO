import {React} from 'react'
import '../superCSSFolder/AdminDashboard.css'
import { useNavigate } from 'react-router-dom'
import {Bar} from "react-chartjs-2";
// import { Chart } from "chart.js/auto"
import { Expense } from '../../../../data';

const AdminDashboard = () => {
  const navigate = useNavigate()
  const label = Expense.map ((e)=>e.month)
  const dataset = Expense.map ((e)=>e.amount)
  console.log(dataset, label, "My dataset")
  const adminHistory =()=>{

    navigate('/adminexpenses')
  }
  return (
    <div className='adminBody'>
      <section className="adminBodyLeft">
      {/* <div className="showdiv"></div> */}
        <div className="adminBodyLeftTop">
          <section className='totalBudget'>
            <p>Total Budget</p>
            <span>₦ 0.00</span>
          </section>

          <section className='amountSpent'>
            <p>Amount Spent</p>
            <span>₦ 0.00</span>
          </section>

          <section className='budgetBalance'>
            <p>Budget Balance</p>
            <span>₦ 0.00</span>
          </section>
        </div>

        <div className="adminBodyLeftMid">
          {/* < Bar data={{labels:label, datasets:[{label:"Expenses", data:dataset,}]}}/> */}
        </div>

        <div className="adminBodyLeftDown">
          <h4 onClick={adminHistory}>Transaction History</h4>
          <div className="adminHistory">
            <p>Salary</p>
            <p>₦20,000</p>
            <p>Employee's Salary</p>
            <p>BudgetId</p>
          </div>
        </div>
      </section>

      <section className="adminBodyRight"></section>
    </div>
  )
}

export default AdminDashboard
