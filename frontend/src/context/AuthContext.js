// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { client } from '../lib/pocketbase';

// Create the AuthContext
const AuthContext = createContext(null);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });

  // Check if the user is logged in when the app loads
  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = client.authStore.isValid;
      const user = client.authStore.model;
      setAuthState({ isLoggedIn, user });
    };

    checkLoginStatus();
  }, []);

  // Function to update auth state
  const updateAuthState = (newAuthState) => {
    setAuthState(newAuthState);
  };

  return (
    <AuthContext.Provider value={{ authState, updateAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};