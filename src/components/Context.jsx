import React, { useState } from 'react'
import { createContext } from 'react'
export const Context = createContext()

const ContextProvider = ({children}) => {
    const [test, setTest] = useState(false)

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
  return (
    <Context.Provider value={{test, handleGetAllBudget}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
