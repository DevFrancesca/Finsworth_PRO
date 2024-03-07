import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CirclesWithBar } from 'react-loader-spinner';
import '../superCSSFolder/Modal.css'

const Modal = ({ handleCancel, handleGetAllBudget }) => {
  const [budgetToken] = useState(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    budgetType: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleBudgetSave = async () => {
    const { amount } = formData;

    
    const createBudgetData = {
      amount: +amount,
      budgetType: formData.budgetType,
    };

    setIsLoading(true); // Start loading spinner

    try {
      // Send POST request to create budget
      const response = await axios.post('https://finsworthpro.onrender.com/api/createBudget', createBudgetData, {
        headers: {
          Authorization: `Bearer ${budgetToken}`,
        },
      });

      setIsLoading(false); // Stop loading spinner

      // Display success message
      Swal.fire({
        title: 'Budget creation Successful!',
        text: response.data.message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '',
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500,
      });

      // Close the modal and update the list of budgets
      handleCancel();
      handleGetAllBudget();
    } catch (error) {
      console.error('Error creating budget:', error);

      // Display error message
      Swal.fire({
        icon: 'error',
        text: 'Budget error!',
        title: error.response?.data?.message || 'Unknown error',
        color: 'red',
      });
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

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
