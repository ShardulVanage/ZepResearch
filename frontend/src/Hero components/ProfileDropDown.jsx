import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { client } from '../lib/pocketbase'
import useLogout from '../hooks/useLogout'
import profile from '../images/profile.jpg' 


export default function ProfileDropDown() {
    const logout = useLogout()

  return (
    <Popover className="relative hidden sm:block">
      <Popover.Button className="inline-flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 mx-2 underline underline-offset-4">
        <img src={profile} alt="" className='h-10 w-10 rounded-full drop-shadow-lg border-2' />
        
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute  left-1/2 z-50 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink  z-50 rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
           <h1 className='underline underline-offset-4 pl-2'>{client.authStore.model.name}</h1>
              <a onClick={logout}  className="block p-2 hover:text-indigo-600">
              logout
              </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}