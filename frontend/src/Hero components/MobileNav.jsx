import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React,{useState} from 'react'
import DropMenuServicer from './DropMenuService'
import { Dialog } from '@headlessui/react'
import logo from '../images/logo.png'
import Client from 'pocketbase'


function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)





  return (
    <div>
<header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between sm:p-0   p-6  lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href='./' className="-m-1.5 p-1.5 text-2xl font-medium block sm:hidden">
              
             {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />  */}

            <a href="./" className=' text-2xl font-medium '><img src={logo} alt="" className='h-12  text-yellow-300 ' />
          </a>
             {/*AUR EK ZR DROPMENUSERVICES MAI HAI FOR DESKTOP VIEW  */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> 

      <div className="hidden lg:flex lg:gap-x-12 w-full items-center justify-center">
            <DropMenuServicer />
            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))} */}
          </div>  



          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>


        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
                  <a href="./" className=' text-2xl font-medium '><img src={logo} alt="" className='h-12  text-yellow-300 ' />
          </a>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                

             <div className="py-6">
                  <a
                    href="/ContactUs"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  >
                   Contact us
                  </a>
                </div>  
              {/* Drop down menu */}
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  >
                    Log in
                  </a>
                </div>
                <DropMenuServicer/>  
                  
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </div>
  )
}

export default Nav