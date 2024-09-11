import React, { useState ,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { client } from '../../lib/pocketbase';
import useGoogleLogin from '../../hooks/useGoogleProvider';
import { ClientResponseError } from 'pocketbase';
import Confetti from 'react-confetti';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import Logo from '../../images/singleLogo.png'
import Login from './Login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Registration() {
  const [showConfetti, setShowConfetti] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { loginWithGoogle } = useGoogleLogin();

 const onSubmit = async (data) => {
    try {
      setLoading(true);
      await client.collection('users').create({
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        name: data.name,
      });
      
      setShowConfetti(true);
      toast.success('Account created successfully. Please log in.');
      setTimeout(() => {
        setShowConfetti(false);
        navigate('/login');
      }, 3000); // Redirect after 5 seconds
    } catch (error) {
      console.error('Registration failed:', error);
      if (error instanceof ClientResponseError) {
        if (error.response.code === 400) {
          const errorDetails = error.response.data;
          if (errorDetails.email) {
            toast.error(`Email error: ${errorDetails.email.message}`);
          } else if (errorDetails.password) {
            toast.error(`Password error: ${errorDetails.password.message}`);
          } else {
            toast.error(error.message || 'Failed to create account. Please check your information.');
          }
        } else {
          toast.error('An unexpected error occurred. Please try again later.');
        }
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
      reset();
    }
  };

  const handleConfettiComplete = useCallback(() => {
    setShowConfetti(false);
  }, []);
  return (
 
  <div className="flex flex-col sm:flex-row min-h-screen py-8 sm:py-12  ">
    {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          onConfettiComplete={handleConfettiComplete}
        />
      )}
      <div className="sm:w-1/2 p-8 mt-12">
       <form className="space-y-6 drop-shadow" onSubmit={handleSubmit(onSubmit)}>
        <Card className="sm:w-96  sm:mx-auto">
          <CardHeader
            variant="filled"
            color="blue"
            className="mb-4 grid h-28  place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="paragraph" className="text-center mb-2">
              Enter your email and password to sign in
            </Typography>
         
              




            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                  {errors.name && <span className='text-xs text-red-600'>{errors.name.message}</span>}
                <input
                  id="name"
                 {...register('name', { required: 'Name is required' })}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder=''
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


             <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                {errors.email && <span className='text-xs text-red-600'>{errors.email.message}</span>}
                   <input
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="email"
                        id="email"
                        {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                        })}
                    />
            
              </div>
            </div>

             <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                  {errors.password && <span className='text-xs text-red-600'>{errors.password.message}</span>}
                    <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"

                        type="password"
                        id="password"
                        {...register('password', { 
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long'
                        }
                        })}
                    />
              </div>
            </div>

             <div>
              <label htmlFor="passwordConfirm" className="block text-sm font-medium leading-6 text-gray-900">
                Password Confirm*
              </label>
              <div className="mt-2">
          {errors.passwordConfirm && <span className='text-xs text-red-600'>{errors.passwordConfirm.message}</span>}

               <input
               type="password"
                 id="passwordConfirm"
                  {...register('passwordConfirm', {
                 required: 'Please confirm your password',
                 validate: (value) => value === document.getElementById('password').value || 'Passwords do not match'
                   })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                 />
              </div>
            </div>


            
            <div>
              {/* <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >          
                {isLoading ? 'Creating Account...' : 'Create Account'}         
              </button> */}
            </div>
          

          

               
            



            <div className="-ml-2.5">
              <Checkbox label="I agree with the Terms and Conditions" required/>
            </div>
            <div className="-ml-2.5">
              <Checkbox label="Subscribe me to newsletter" />
            </div>
            <Typography
              as="a"
              href="#"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Forgot password
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button 
             
              disabled={isLoading}
              variant="gradient" fullWidth
              type="submit"
              >
                  {isLoading ? 'Creating Account...' : 'Create Account'}       
            </Button>
            <Button
            onClick={loginWithGoogle}
              variant="outlined"
              color="blue-gray"
              fullWidth
              className="flex items-center justify-center gap-3 mt-3"
            >
              <img src="https://docs.material-tailwind.com/icons/google.svg" alt="Google" className="h-6 w-6" />
              Sign In with Google
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              fullWidth
              className="flex items-center justify-center gap-3 mt-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Sign In with X
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              I have account.
              <Typography
                as="a"
                href="/Login"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                >
                Sign In
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
             </form>
      </div>
      <div className="w-1/2 bg-cover bg-center drop-shadow-2xl rounded-md opacity-90" style={{backgroundImage: "url('https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
    </div>
  );
}

export default Registration;








//  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src={Logo}
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Create Account 
//           </h2>
//         </div>

//         <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm h-auto bg-white p-4 drop-shadow-md pt-8 rounded-md">
         

          
//         </div>
//       </div>