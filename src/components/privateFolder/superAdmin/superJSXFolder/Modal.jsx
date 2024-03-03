import React, { useContext, useState } from 'react';
import '../superCSSFolder/Modal.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';




const Modal = ({ handleCancel }) => {

  const getToken = JSON.parse(localStorage.getItem("token"))
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    amount: 0,
    budgetType: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const url = 'https://finsworthpro.onrender.com/api/createBudget'

  const handleBudgetSave = async ()=>{
      const { amount } = formData
      const createBudget = { ...formData, amount: +amount };
      console.log('Form data:', createBudget);

        setIsLoading(true)
     try {
        const response = await axios.post(url, createBudget, {
            headers: {
                Authorization: getToken
              }
        })
      setIsLoading(false);

        console.log(response)
        if(response) {
            handleCancel()
            handleGetAllBudget()
        }
     } catch (error) {
      console.error('Error fetching data:', error);
        
     }
     finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>&times;</span>
        <h2>Create Budget</h2>
        <form>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="budgetType">Budget Type:</label>
            <select
              id="option"
              name="budgetType"
              value={formData.budgetType}
              onChange={handleChange}
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
         
          <div className="buttons">
            <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
            <button type="button" className="save" onClick={handleBudgetSave}>
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
                "Save"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
