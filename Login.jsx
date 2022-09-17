import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BsCart4 } from "react-icons/bs";
import { BsArrowLeft } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { GrMail } from 'react-icons/gr'
const products = [

]

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                type="button"
                className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setOpen(!open)}>
                <span className="sr-only ">Close panel</span>
                <BsCart4 className='w-7 h-7 ml-5  mt-5' />
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(!open)}>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen sm:w-[28rem] ">
                                        <div className="flex h-full flex-col     bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium ml-2 flex text-gray-900"><BsArrowLeft className='mr-3 mt-[5px]' /> login or register
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >  <AiOutlineClose className='w-5 h-5' />
                                                            <span className="sr-only">Close panel</span>
                                                        </button>
                                                    </div>
                                                </div>

{/* <-------------------------------------------------Login register----------------------------------------------------------------------> */}
                                                <div className='shadow-md shadow-md  mt-10  h-[18rem] rounded-xl text-center border-t-2 '>
                                                    <h4 className='text-center pt-[10px] text-lg'>Login With</h4>
                                                    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 '><div className='flex bg-white ml-5 h-8 mt-2  items-center justify-center '>
                                                        <div><FcGoogle className='w-6 h-6 mb-2' /></div>
                                                        <div className='bg-gray-50 ml-2   rounded-lg'><h6 >Google</h6></div>
                                                    </div></button>
                                                    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[30px]'>
                                                        <div className='flex bg-white ml-5 h-8 mt-2  items-center justify-center'>
                                                            <div><BiPhoneCall className='w-6 h-6 mb-1' /></div>
                                                            <div className='bg-gray-50 ml-2   rounded-lg'><h6 >Login using mobile number</h6></div>
                                                        </div></button>
                                                    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[30px]'><div className='flex bg-white ml-5 h-8 mt-2  items-center justify-center'>
                                                        <div><GrMail className='w-6 h-6 mb-1' /></div>
                                                        <div className='bg-gray-50 ml-2  rounded-lg'><h6 >Login using mail</h6></div>
                                                    </div></button>
                                                </div>
                                                <div className='flex'>
                                                    <h5 className='pt-[25px] pl-[25px] text-lg'>Don't have an account?<span className='text-red-400 text-xl pl-5'>Register</span></h5>
                                                </div>
{/* <-------------------------------------------------Login mobile number----------------------------------------------------------------------> */}
                                                <div className='shadow-md mt-10  h-[26rem] rounded-lg text-center border-t-2 '>
                                                    <h4 className='text-center pt-[10px] text-lg'>Login Using Mobile Number</h4>
                                                    <h6 className=' text-start pt-2 pl-5'>User Name</h6>
                                                    <input type="tel" className=" w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <h6 className=' text-start pt-3 pl-5'> Phone Number</h6>
                                                    <input type="tel" className="w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <button
                                                        className='text-center bg-red-400 w-[30%] text-white h-[25px] mt-[20px] pt-1 rounded-2xl'> LOG IN
                                                    </button>
                                                    <h6 className='text-center mt-[20px]'> (or)</h6>
                                                    <button className=' w-[90%] shadow-sm border border-slate-300  mt-[10px] '>
                                                        <div className='flex bg-white h-10   items-center justify-center '>
                                                            <div><FcGoogle className='w-6 h-6 mb-1' /></div>
                                                            <div className='bg-gray-50 ml-2 pt-2  rounded-lg'><h6 >Google</h6></div>
                                                        </div></button>
                                                    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[20px] '>
                                                        <div className='flex bg-white  h-10   items-center justify-center'>
                                                            <div><GrMail className='w-6 h-6' /></div>
                                                            <div className='bg-gray-50 ml-2 pt-2  rounded-lg'><h6 >Login using mail</h6></div>
                                                        </div></button>
                                                </div>
{/* <-------------------------------------------------Login mail----------------------------------------------------------------------> */}
                                                <div className='shadow-md mt-10  h-[28rem] rounded-lg text-center border-t-2 '>
                                                    <h4 className='text-center pt-[10px] text-lg'>Login Using Mail</h4>
                                                    <h6 className=' text-start pt-2 pl-5'>Email id</h6>
                                                    <input type="tel" className=" w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <h6 className=' text-start pt-3 pl-5'>password</h6>
                                                    <input type="tel" className=" w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <button className='text-center bg-red-400 w-[30%] text-white h-[25px] mt-[20px] pt-1 rounded-2xl'> LOG IN</button>
                                                    <h6 className='text-center mt-[20px]'> (or)</h6>
                                                    <h6 className='text-center mt-[10px]'> Login with social account</h6>
                                                    <button className=' w-[90%] shadow-sm border border-slate-300  mt-[10px] '>
                                                        <div className='flex bg-white h-10   items-center justify-center '>
                                                            <div><FcGoogle className='w-6 h-6 mb-1' /></div>
                                                            <div className='bg-gray-50 ml-2 pt-2  rounded-lg'><h6 >Google</h6></div>
                                                        </div></button>
                                                    <button className=' w-[90%] shadow-sm  border border-slate-300 hover:border-red-400 mt-[20px] '>
                                                        <div className='flex bg-white  h-10   items-center justify-center'>
                                                            <div><BiPhoneCall className='w-6 h-6' /></div>
                                                            <div className='bg-gray-50 ml-2 pt-2  rounded-lg'><h6 >Login using mobile number</h6></div>
                                                        </div></button>
                                                </div>
{/* <-------------------------------------------------register form----------------------------------------------------------------------> */}
                                                <div className='shadow-md mt-10  h-[32rem] rounded-lg text-center border-t-2 '>
                                                    <h4 className='text-center pt-[10px] text-lg text-black'>Register with</h4>
                                                    <button className=' w-[90%] shadow-sm border border-slate-300  mt-[10px] '>
                                                        <div className='flex bg-white h-10   items-center justify-center '>
                                                            <div><FcGoogle className='w-6 h-6 mb-1' /></div>
                                                            <div className='bg-gray-50 ml-2 pt-2  rounded-lg'><h6 >Google</h6></div>
                                                        </div></button>
                                                    <h6 className='text-center mt-[20px]'> (or)</h6>
                                                    <h6 className=' text-start pt-2 pl-5'>Name</h6>
                                                    <input type="tel" className=" w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <h6 className=' text-start pt-3 pl-5'> Phone Number</h6>
                                                    <input type="tel" className="w-[90%]  focus:outline-none border-b-2 " ></input>
                                                    <div>
                                                        <h6 className='  pt-3 pr-5 float-right inline'> OTP will be sent for verification</h6>
                                                    </div>
                                                    <h6 className=' text-start pt-2 pl-5 mt-10'>Email ID</h6>
                                                    <input type="tel" className=" w-[90%] h-[25px]  focus:outline-none border-b-2" ></input>
                                                    <div>
                                                        <button className='text-center bg-red-400 w-[30%] text-white h-[25px] mt-[20px] pt-1 mt-3 ml-7 rounded-md'>REGISTER</button>
                                                    </div>
                                                    <h6 className='text-center mt-3 text-lg'> By proceeding, you agree to Zivame<span className='text-black text-lg mr-2'><span className='text-red-400 text-lg mr-2'>Privacy Policy</span> and</span><span className='text-red-400 text-lg mr-2'>rerms & conditions</span> </h6>
                                                </div>
                                                <h6 className='mt-3 ml-20 text-lg'>Already have an account?<span className='text-red-400 text-lg'> Login</span></h6>
                                            </div>
                                        </div>
{/* <-------------------------------------------------end----------------------------------------------------------------------> */}
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {products.map((product) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={product.imageSrc}
                                                                    alt={product.imageAlt}
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href={product.href}>{product.name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>


                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}



