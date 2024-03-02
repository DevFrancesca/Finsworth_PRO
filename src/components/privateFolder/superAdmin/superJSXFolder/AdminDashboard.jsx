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
  const adminHistory =()=>{
    navigate('/adminhistory')
  }
  return (
    <div className='adminBody'>
      <section className="adminBodyLeft">
      {/* <div className="showdiv"></div> */}
        <div className="adminBodyLeftTop">
        <article className="dashboardCurrentAmount">
          <p>Current Balance</p>
          <span>₦ 0.00</span>
        </article>
        <section className="dashboardCurrentAmount">
          <p>Expenses</p>
          <span>₦ 0.00</span>
        </section>
        </div>

        <div className="adminBodyLeftMid">
          < Bar data={{labels:label, datasets:[{label:"Expenses", data:dataset,}]}}/>
        </div>

        <div className="adminBodyLeftDown">
          <h5 onClick={adminHistory}>Transaction History</h5>
          <div className="adminHistory">
            <p>Category</p>
            <span>Amount</span>
            <p>Date</p>
          </div>
        </div>
      </section>

      <section className="adminBodyRight"></section>
    </div>
  )
}

export default AdminDashboard
