import React, { useState } from 'react'

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
import {useForm} from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import useGoogleLogin from '../../hooks/useGoogleProvider';



export default function Login() {
   const { register, handleSubmit, reset } = useForm()
  const { loginWithGoogle } = useGoogleLogin();
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  return (
    <div className="flex flex-col sm:flex-row min-h-screen py-8 sm:py-12  ">
      <div className="sm:w-1/2 p-8 mt-12">
       <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit(login)}>
        <Card className="sm:w-96  sm:mx-auto">
          <CardHeader
            variant="filled"
            color="blue"
            className="mb-4 grid h-28  place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="paragraph" className="text-center mb-2">
              Enter your email and password to sign in
            </Typography>
          
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    {...register("email")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                     {...register("password")}
                  />
                </div>
              </div>

          

               
            



            {/* <div className="-ml-2.5">
              <Checkbox label="I agree with the Terms and Conditions" />
            </div>
            <div className="-ml-2.5">
              <Checkbox label="Subscribe me to newsletter" />
            </div> */}
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
               {isLoading?"Loading...":"Login"}
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
              Not registered?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                >
                Create account
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








































// import React, { useState } from 'react'
// import Logo from '../../images/singleLogo.png'
// import {useForm} from 'react-hook-form'

// import { useNavigate } from 'react-router-dom'
// import useLogin from '../../hooks/useLogin'


// function Login() {
//  const { register, handleSubmit, reset } = useForm()
 
//   const navigate = useNavigate();
//   const { login, isLoading } = useLogin();

  
 
//   return (
//   <div className="flex min-h-full flex-1 flex-col justify-center mt-24 py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <img
//             className="mx-auto h-10 w-auto"
//             src={Logo}
//             alt="Your Company"
//           />
//           <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
//             <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit(login)}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                     {...register("email")}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//                      {...register("password")}
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
//                   />
//                   <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm leading-6">
//                   <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <button 
//                 onClick={(()=>{  navigate('./');})}
//                 disabled={isLoading}
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                 >
             
//                   {isLoading?"Loading...":"Login"}
                
//                 </button>
//               </div>
//             </form>

//             <div>
//               <div className="relative mt-10">
//                 <div className="absolute inset-0 flex items-center" aria-hidden="true">
//                   <div className="w-full border-t border-gray-200" />
//                 </div>
//                 <div className="relative flex justify-center text-sm font-medium leading-6">
//                   <span className="bg-white px-6 text-gray-900">Or continue with</span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <a
//                   href="#"
//                   className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
//                 >
//                   <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                   <span className="text-sm font-semibold leading-6">Twitter</span>
//                 </a>

//                 <a
//                   href="#"
//                   className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
//                 >
//                   <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                     <path
//                       fillRule="evenodd"
//                       d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   <span className="text-sm font-semibold leading-6">GitHub</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="/Registration" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
//               Create Account Now
//             </a>
//           </p>
//         </div>
//       </div>
//   )
// }

// export default Login