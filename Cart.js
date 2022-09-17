import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import { BsCart3} from "react-icons/bs";
import {MdDeleteForever} from 'react-icons/md'
import {AiOutlineGift} from 'react-icons/ai'
import {MdRedeem} from 'react-icons/md'


import './dropdown.css'
import { noAuto } from '@fortawesome/fontawesome-svg-core';
import Product from './product';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '900.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '320.00',
    quantity: 1,
    imageSrc: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
    imageAlt:'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },

  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '320.00',
    quantity: 1,
    imageSrc: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1236&fit=crop&crop=faces',
    imageAlt:'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '320.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
 
  
  // More products...
]


function Example(){
 
    const [open, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({set3:false,set4:false});
    const [itemCount, setItemCount] = React.useState(1);
    const [total, setTotal] =useState(0)
    // const [employees, setEmployees] = useState(products);
    // const remove = () => {
    //   setEmployees(current =>
    //     current.filter(products => {
    //       return products.id !== 3 && products.id !== 2;
    //     }),
    //   );
    // };
 

    return (

        <div >


        <button onClick={()=> setOpen(!open)} className="float-right mr-4 sm:mr-96">
        <BsCart3 className='w-7 h-7 m-5 '/>
        </button>
        
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                <div className="pointer-events-none fixed inset-y-0 right-0 flex  pl-10">
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full" >
               
                    <Dialog.Panel className="pointer-events-auto w-screen md:w-[26rem]  ">
                    <div className="flex h-screen flex-col  bg-white shadow-xl">
                        
                    <div className="flex  justify-between p-4  border-b-2 shadow-lg shadow-gray-300  absolute bg-gray-700 w-full z-10 rounded-b-xl">
                            <Dialog.Title className="flex text-lg font-medium text-white drop-shadow-lg shadow-black ml-3">SHOPPING CART <BsCart3 className='w-5 h-5 ml-2 mt-1'/> </Dialog.Title>
                           
                           
                            <div className="ml-3 flex h-7 items-center">
                            <button   type="button"   className="-m-2 p-2 text-gray-300 " onClick={() => setOpen(!open)} >
                            <XMarkIcon className="h-6 w-6 hover:scale-150 mr-2" aria-hidden="true" />
                            </button> 
                            </div>   
                      
                        </div>
                                
                           
                           
                        
                        <div className="flex-1 overflow-y-auto scroll-none">
                        
                        <div className="mt-20">
                            <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200 px-5">{products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    
                                
                                <div className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-lg shadow-gray-400">
                                    <img src={product.imageSrc}  alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                                </div>
                                   
                                   

                                    <div className="ml-4 flex flex-1 flex-col">

                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3><Link to={product.href} className="drop-shadow-md drop-shadow-black" >{product.name}</Link>  </h3>
                                        <p className="ml-4" >{product.price}  </p>   
                                        
                                        </div>
                                        <p className="mt-1 text-sm text-gray-700">{product.color}</p>                                       
                                    </div>


                                     <div className="flex flex-1 items-end justify-between mt-2">

                                        <div className="text-gray-700 flex  font-medium text-md">
                                        
                                        <p>Qty:</p>
                                       
                                        
                                        <button  onClick={() => {setItemCount(Math.max(itemCount - 1, 0));}} className=" h-[18px] w-[18px]  rounded-full text-white  bg-gray-700 flex justify-around  mx-2 mt-1">
                                        <p className='mt-[-20%]'>-</p>
                                       
                                       </button> 
                                        {(product.quantity + itemCount)  }
                              
                                        
                                        <button onClick={() => {setItemCount(itemCount + 1);}} className=" h-[18px] w-[18px]  rounded-full text-white  bg-gray-700 flex justify-around  mx-2 mt-1 ">
                                        <p className='mt-[-20%]'>+</p>
                                        
                                        </button>
                                        </div>


                                      
                                      
                                  

                                        
                                   </div>
                                    
                                   
                                   <div className='flex justify-between'>
                                   <div>
                                   <p className='mt-2'>Total: {product.price}</p>
                                   </div>
                                   <div className="flex  p-1">
                                        <button type="button" className="font-medium text-red-700  " > 
                                       
                                        <MdDeleteForever className='w-6 h-6 ml-2 mt-1 hover:scale-150 drop-shadow-lg '/></button>
                                        </div>
                                        </div>
                                        </div>

                                   


                                </li>
                                ))}
                            </ul>


                            </div>
                            
                        </div>



                        <hr className="w-full drop-shadow-lg mt-5"/>

                        <div className="relative group w-full mt-3">
                        <button className="flex w-full justify-between  " onClick={()=>setIsActive({...isActive, set3:!isActive.set3})}>
                          <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " > <AiOutlineGift className=' w-5 h-5 mr-2'/> <h3>ADD A GIFT WRAP</h3></p>
                          <svg className="fill-current h-9 w-5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg></button>
                        <div  className=" group-focus:block mt-3 ">
                         
                             {isActive.set3 && (


                              <div className='ml-5 mb-5 px-3'>


                              <div className='flex justify-between mb-2 '>
                              <label htmlFor="price" className="block text-sm font-medium text-gray-700 drop-shadow-lg"> YOUR NAME</label>
                              <input type="text"  name="price"  id="price" className=" rounded-xl border-gray-300 w-56 focus:border-black focus:ring-black sm:text-sm " placeholder="your name" />
                              </div>

                              <div className='flex justify-between mb-2'>

                              <label htmlFor="price" className="block text-sm font-medium text-gray-700 uppercase drop-shadow-lg"> recipient's name</label>
                              <input type="text"  name="price"  id="price" className="block rounded-xl border-gray-300 w-56  focus:border-black focus:ring-black sm:text-sm " placeholder="Beloved one's name" />
                              </div>

                              <div className='flex justify-between'>
                              <label htmlFor="price" className="block text-sm font-medium text-gray-700 uppercase drop-shadow-lg"> your message</label>
                              <input type="text"  name="price"  id="price" maxLength="250" className=" rounded-xl border-gray-300 w-56 focus:border-black focus:ring-black sm:text-sm pb-16" placeholder="(250 CHARACTERS MAX)" />
                              </div>


                              <div className='flex justify-between mt-5 '>
                              <button className=' text-sm   p-1 px-7  rounded-2xl text-white hover:shadow-lg hover:shadow-gray-500 bg-gray-700'>
                              <p className='drop-shadow-lg'>CANCEL</p>
                              </button>
                              <button className=' text-sm  w-56 p-1 px-7  rounded-2xl text-white hover:shadow-lg hover:shadow-gray-500 bg-gray-700'>
                              <p className='drop-shadow-lg text-center py-1'>ADD GIFT WRAP</p>
                              </button>
                              </div>


                              </div> 
                        )}
                      </div>
                      </div>

                    <hr className="w-full drop-shadow-lg"/>


                      <div className="relative group w-full mt-3">
                        <button className="flex w-full justify-between " onClick={()=>setIsActive({...isActive, set4:!isActive.set4})}>
                          <p className=" text-gray-900 drop-shadow-lg  ml-3 font-medium flex " > <MdRedeem className=' w-5 h-5 mr-2 '/> <h3>REDEEM YOUR GIFT CARD</h3></p>
                          <svg className="fill-current h-9 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg></button>
                        <div  className=" group-focus:block mt-3 ">
                         
                             {isActive.set4 && (
                               <div>

                              <div className='px-2 mb-3 flex justify-evenly'>

                              <input type="text"  name="price"  id="price" className="block rounded-xl  w-40 focus:border-black focus:ring-black sm:text-sm " placeholder="CARD NO" />

                              <input type="text"  name="price"  id="price" className="block rounded-xl   w-40 focus:border-black focus:ring-black sm:text-sm " placeholder="PIN" />
                              
                              </div> 
                              <div className='flex justify-center mb-5 pt-3'>
                                <button className=' text-sm   p-1 px-10 py-2 rounded-2xl text-white hover:shadow-lg hover:shadow-gray-500 bg-gray-700'>
                                <p className='drop-shadow-lg'>REDEEM</p>
                                </button>
                            </div>

                             </div>
                             
                        )}
                      </div>
                      </div>


                      <hr className="w-full drop-shadow-lg"/>


                      <div className='divide-y-2 divide-dotted px-3 divide-gray-300 bg-gray-200'>

                      <div className='flex justify-between px-2'>
                           <p className='my-1 mt-2'>Total M.R.P :</p> 
                           <p>{total}</p>  
                      </div>
                      <div className='flex justify-between my-2 px-2'>
                           <p className='my-1'>Savings on M.R.P :</p> 
                           <p>{total}</p>  
                      </div>
                      <div className='flex justify-between my-2 px-2'>
                           <p className='my-1'>Saving % :</p> 
                           <p>{total}</p>  
                      </div>
                      <div className='flex justify-between my-2 px-2'>
                           <p className='my-1'>Shipping :</p> 
                           <p>NULL</p>  
                      </div>
                      <div className='flex justify-between my-2 px-2'>
                           <p className='my-1'>Order total :</p> 
                           <p>{total}</p>  
                      </div>
                      <div className='flex justify-between px-2'>
                           <p className='my-1 mb-2'>Net Payable :</p> 
                           <p>{total}</p>  
                      </div>

                      </div>


                      
                        </div>





                        <div className="border-t border-gray-200 pb-16 px-4 sm:px-5">
                        <div className="flex justify-between text-base font-medium  text-gray-900 drop-shadow-lg shadow-black mt-4">
                            <p>SUB TOTAL</p>
                            <p className='mr-4'>{total} </p>
                         </div>    
                      
                        <p className="mt-1 text-sm text-gray-500 mb-5">Shipping and taxes calculated at checkout.</p>
                        
                        
                        <div className="mt-2">
                            <Link to={""} className="flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white hover:shadow-lg hover:shadow-gray-500 bg-gray-700 shadow-inner ">Continue to Checkout</Link>
                        </div>

                        <div className=" flex justify-evenly  text-sm text-gray-500 link-underline link-underline:hover p-2">
                            
                          
                            <button type="button" className="font-medium text-md text-gray-500 hover:text-gray-700 " onClick={() => setOpen(!open)}>  Continue Shopping<span aria-hidden="true" > &rarr;</span>
                            </button>
                          
                        </div>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
        </div>
    )
}

export default Example;







