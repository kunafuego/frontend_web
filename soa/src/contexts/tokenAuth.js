import React, { createContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
  
export const tokenAuth = createContext();
  
  const TokenAuthProvider = ({ children }) => {
    const [currentSimulacions, storeSimulacions, clearStoredSimulacions] = useLocalStorage('simulacions')
  
    const handleTokenChange = (token, action) => {
        if (action === 'logout'){
            clearStoredSimulacions();
        }
        else {
            storeSimulacions(token);
        }
    };

    const userStatus = useMemo(
      () => ({ currentSimulacions, handleTokenChange }),
      [currentSimulacions, handleTokenChange],
    );
  
    return (
      <tokenAuth.Provider value={userStatus}>
        {children}
      </tokenAuth.Provider>
    );
};
  
export default TokenAuthProvider;