import React from 'react'
import '../superCSSFolder/Payment.css'

const Payment = () => {

    // const userData = JSON.parse(localStorage.getItem("users"))
  function payKorapay() {
    const referenceValue = "PLA"+ Math.random() * 1000
    window.Korapay.initialize({
        key: "pk_test_rPvv7QY9Um9FeNxxbKFnMw58y22euiGtdFHkjTrK",
        reference: referenceValue,
        amount: 2000, 
        currency: "NGN",
        customer: {
          name: "Henry",
          email: "Chidera@gmail.com",
        },
        notification_url: "https://example.com/webhook"
    });
}


  return (
    <div className='PaymentBody'>

        <div className='PaymentWrapper'>
            <div className="PaymentCard">
                <div className='PaymentInputs'>
                <label htmlFor="" >Company Name</label>
            <input type="text" className='Paymentinputs' placeholder='e.g Chidera Vantures'/>
             </div>
                <div className='PaymentInputs'>
                <label htmlFor="" >Email</label>
            <input type="text" className='Paymentinputs' placeholder='e.g chideraakude@gmail.com'/>
             </div>
                <div className='PaymentInputs'>
                <select  className='PaymentPlan'>
                <option value="PaymentPlan">Payment Plan</option>
                <option value="PaymentPlan">Monthly</option>
                <option value="PaymentPlan">Yearly</option>
            </select>
             </div>
             <div className='PaymentInputs'>
             <label htmlFor="" >Amount</label>
            <input type="text" className='Paymentinputs' placeholder=''/>
             </div>
            <div className='Paymentbtn' onClick={payKorapay}>Purchase plan</div>
            </div>
        </div>
      
    </div>
  )
}


export default Payment
