import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { client } from '../../lib/pocketbase';
import Logo from '../../images/singleLogo.png'

function Registration() {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await client.collection('users').create({
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        name: data.name,
        
      });
      
      alert('Account created successfully. Please log in.');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account 
          </h2>
        </div>

        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-sm h-auto bg-white p-4 drop-shadow-md pt-8 rounded-md">
          <form className="space-y-6 drop-shadow" onSubmit={handleSubmit(onSubmit)}>




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
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >          
                {isLoading ? 'Creating Account...' : 'Create Account'}         
              </button>
            </div>
          </form>

          
        </div>
      </div>

  );
}

export default Registration;






    // <div className='h-screen w-screen flex  flex-col justify-center items-center'>
    //   <h2>Create Account</h2>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         id="name"
    //         {...register('name', { required: 'Name is required' })}
    //       />
    //       {errors.name && <span>{errors.name.message}</span>}
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         {...register('email', { 
    //           required: 'Email is required',
    //           pattern: {
    //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //             message: 'Invalid email address'
    //           }
    //         })}
    //       />
    //       {errors.email && <span>{errors.email.message}</span>}
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         {...register('password', { 
    //           required: 'Password is required',
    //           minLength: {
    //             value: 8,
    //             message: 'Password must be at least 8 characters long'
    //           }
    //         })}
    //       />
    //       {errors.password && <span>{errors.password.message}</span>}
    //     </div>
    //     <div>
    //       <label htmlFor="passwordConfirm">Confirm Password</label>
    //       <input
    //         type="password"
    //         id="passwordConfirm"
    //         {...register('passwordConfirm', {
    //           required: 'Please confirm your password',
    //           validate: (value) => value === document.getElementById('password').value || 'Passwords do not match'
    //         })}
    //       />
    //       {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
    //     </div>


    //     <button type="submit" disabled={isLoading}>
    //       {isLoading ? 'Creating Account...' : 'Create Account'}
    //     </button>
    //   </form>
    // </div>