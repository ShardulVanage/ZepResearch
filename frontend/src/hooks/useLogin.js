import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { client } from '../lib/pocketbase';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const { reset } = useForm();
  const navigate = useNavigate();
  const { updateAuthState } = useAuth();

  const login = async (data) => {
    try {
      setLoading(true);
      const authData = await client.collection('users').authWithPassword(data.email, data.password);
      console.log(authData);
      updateAuthState({ isLoggedIn: true, user: authData.record });
      navigate('/'); // Use an absolute path
      toast.success('You have been successfully logged in.');
    } catch(error) {
      console.error('Login failed:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return { login, isLoading };
}

export default useLogin;