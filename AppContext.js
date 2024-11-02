import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State to track if the user is logged in, initialized from localStorage
  const [user, setUser] = useState(() => Boolean(localStorage.getItem("token")));
  
  // State to track the username, initialized from localStorage
  const [username, setUsername] = useState(() => localStorage.getItem("username") || '');

  // Logout function to clear user data from localStorage and reset state
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(false);
    setUsername('');
  };

  // Effect to synchronize username with localStorage when user state changes
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (user && storedUsername) {
      setUsername(storedUsername);
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser, username, setUsername, logout }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);

export default AppContext;
