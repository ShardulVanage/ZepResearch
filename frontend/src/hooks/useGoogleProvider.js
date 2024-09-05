import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '../lib/pocketbase';
import { useAuth } from '../context/AuthContext';

function useGoogleLogin() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateAuthState } = useAuth();

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const authData = await client.collection('users').authWithOAuth2({ provider: 'google' });
      console.log(authData);
      updateAuthState({ isLoggedIn: true, user: authData.record });
      navigate('/'); // Use an absolute path
      alert('You have been successfully logged in with Google.');
    } catch(error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loginWithGoogle, isLoading };
}

export default useGoogleLogin;