import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { client } from '../lib/pocketbase'


const isLoggedIn = client.authStore.isValid;


function useLogout() {
  const navigate = useNavigate();
  const { authState, updateAuthState } = useAuth();
 function logout() {
  try {
      // Clear the auth store
      client.authStore.clear();

      // Update the global auth state
      updateAuthState({ isLoggedIn: false, user: null });

      // Optionally, you can make an API call to logout on the server side
      // await api.logout();

      // Redirect to the home page or login page
      navigate('./');

      // Optionally, show a success message
      alert('You have been successfully logged out.');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  }


  return logout;
}

export default useLogout