import React from 'react';

import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from 'react';
import image1 from './images/zephyr-stripe-skater-dress-white-n-blue.webp';
import image2 from './images/zephyr-stripe-skater-dress-white-n-blue (1).webp';
import image3 from './images/zephyr-stripe-skater-dress-white-n-blue (2).webp';
import image4 from './images/zephyr-stripe-skater-dress-white-n-blue (3).webp';
import image5 from './images/zephyr-stripe-skater-dress-white-n-blue.webp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}


const Text = [
    {
        id: 1,
        name: "first",
        text: " Our collection of dresses in varying lengths & stylish silhouettes,from casual to dressy"
    },
    {
        id: 2,
        name: "second",
        text: " Our collection of dresses in varying lengths & stylish silhouettes."
    },
   
    {
        id: 2,
        name: "second",
        text: " Our collection of dresses in varying lengths & stylish silhouettes."
    },

]


function Detail() {
   
    const [pic, setPic] = useState(image1);
    const [data, setData] = useState({
        id: 1,
        name: "first",
        text: " Our collection of dresses in varying lengths & stylish silhouettes, from casual to dressy"
    },)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


  return (

    <div className='capitalize '>
<div className='w-full h-24 bg-cyan-300'></div>

<div className='flex flex-wrap lg:flex-nowrap mb-5 bg-primary'>
<div className='sm:flex mt-3'>



<div className='hidden sm:block w- sm:w-32 h-[36rem] md:h-[42rem]  overflow-hidden  overflow-y-auto mx-6 no-scrollbar drop-shadow-xl  border-y-[6px] border-cyan-600 rounded-lg md:ml-20'>
<div className=' '>
                                <div >
                                <img src={image1} alt="image1" className=' mb-2 rounded-b-lg ' onClick={() => setPic(image1)}></img>
                                </div>
                                <div>
                                <img src={image2} alt="image2" className=' mb-2 rounded-lg ' onClick={() => setPic(image2)}></img>
                                </div>
                                
                               <div>
                                
                               <img src={image3} alt="image3" className=' mb-2 rounded-lg ' onClick={() => setPic(image3)}></img>
                               </div>
                               <div>
                                <img src={image4} alt="image4" className=' mb-2 rounded-lg ' onClick={() => setPic(image4)}></img>
                                </div>
<div><img src={image5} alt="image5" className=' mb-2 rounded-lg ' onClick={() => setPic(image5)}></img></div>
     <div><img src={image1} alt="image1" className=' mb-2 rounded-lg ' onClick={() => setPic(image1)} ></img></div>                           
         <div>  <img src={image2} alt="image2" className=' mb-2 rounded-lg ' onClick={() => setPic(image2)}></img></div>                       
                              
                               <div> <img src={image3} alt="image3" className='  rounded-t-lg ' onClick={() => setPic(image3)}></img></div>
                            </div>
</div>


<div className=' w-full md:w-[30rem] md:h-[42rem]  rounded-xl shadow-gray-400 px-3 hidden sm:block'>

<img src={`${pic}`} alt="image2" className=" w-96 md:w-[30rem] md:h-[42rem]  rounded-xl"></img>

</div>

</div>
<div>
    




</div>



    <div className='  h-[55rem]  overflow-y-auto px-4 w-full  mt-3 xl:ml-5 bg-primary md:mt-8 lg:mt-5 no-scrollbar'>
    <div className='sm:hidden '>
    <Carousel responsive={responsive} infinite={true} autoPlaySpeed={5000}  keyBoardControl={true}   dotListClass="custom-dot-list-style" className="  rounded-xl border">
    <div>
   <img src={image1} alt="sdfa" />
    </div>
    <div>
   <img src={image2} alt="sdfa" />
    </div>
    <div>
   <img src={image3} alt="sdfa" />
    </div>
    <div>
   <img src={image4} alt="sdfa" /> 
    </div>
    <div>
   <img src={image5} alt="sdfa" />
    </div>
    </Carousel>
    </div>
     <div className='z-50 bg-primary py-1 relative mt-[-30px] rounded-t-3xl '>
    <h1 className='text-2xl xl:text-4xl font-medium my-3 ml-2 md:ml-0 md:mt-6' > Zephyr Stripe Skater Dress- White N Blue</h1>
    </div>   
    <div>
    <h1 className='text-2xl text-red-700 my-2 font-medium' > ₹1276   <span className='text-black text-lg '>  ₹1595   </span>(20% OFF)</h1>
    </div>
    <div className='my-2 font-medium text-xl'>
    <p > inclusive of all taxes</p>
    </div>
    <div className='flex text-xl my-3'><AiFillStar className='mt-0.5 text-2xl' />
    <h6 className='ml-2'>4.6 <span className='text-green-700 '>(7 reviews)</span></h6>
    </div>
<hr className='border-gray-400'/>
<div className='mt-2'>
<h1 className='text-xl font-medium'> PRODUCT FEATURES</h1>
</div>
<div className='mt-3 border-black'>

<ul className='pl-0'>
    {Text.map((item) => {
        return (
            <button className='  ml-[7px] capitalize  bg-brand  rounded-t-md px-4 ' alt="data1" onClick={() => setData({ id: item.id, name: item.name, text: item.text })}>{item.name}</button>
        )
    })}
</ul>
<div className='w-[100%] h-[150px] bg-white rounded-xl mb-3' key={data.id}>
    <p className='pt-[20px] pl-[20px]' alt="data1">{data.text}</p>
    <h6 className='pl-[20px] text-red-700'>See Matching Products</h6>
</div>
</div>
<hr />

    <div className=''>
    <div > 
    <h6 className='mt-[20px] text-xl font-medium'> SIZES</h6>
 </div>
<div className='flex flex-wrap justify-between px-4'>


    <div className='flex w-72 justify-evenly mt-4 font-medium'>
         <button className=' text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400' >S</button>
         <button className=' text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400'>M</button>
         <button className=' text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400'>L</button>
         <button className=' text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400'>XL</button>
         <button className=' text-black  w-12 h-12 bg-gray-200 rounded-full shadow-md shadow-gray-400'>XXL</button>
        
         </div>
         <div className='mt-5 text-lg'> Not Sure About Your Size ? <button className='text-green-700 font-medium'>Size Chart</button>
         <h6 className='mt-[20px]  text-red-700 text-lg font-medium '> +2 Sizes Out Of Stock</h6></div> 
    </div>
    
    <div> 
    <h6 className='mt-[20px] text-xl font-medium'> Colors</h6>
 </div>   
 <div className='flex flex-wrap justify-between px-4 '>

 <div className='flex w-72 justify-evenly mt-4'>
      <button className=' text-black  w-12 h-12 bg-white rounded-full shadow-md shadow-gray-400 border border-black' ></button>
      <button className=' text-black  w-12 h-12 bg-blue-700 rounded-full shadow-md shadow-gray-400 border border-black'></button>
      <button className=' text-black  w-12 h-12 bg-green-800 rounded-full shadow-md shadow-gray-400 border border-black'></button>
      <button className=' text-black  w-12 h-12 bg-black rounded-full shadow-md shadow-gray-400 border border-black'></button>
      <button className=' text-black  w-12 h-12 bg-red-700 rounded-full shadow-md shadow-gray-400 border border-black'></button>
     
      </div>
      <div className='mt-5 text-lg'> Not Sure About Your Size ? <button className='text-green-700 font-medium'>Size Chart</button>
<h6 className='mt-[20px]   text-red-700 text-lg font-medium'> +2 Sizes Out Of Stock</h6></div>
 </div>
   
    </div>
    <button className='bg-brand  shadow-md shadow-gray-600 px-16 py-2 rounded-md my-5 font-medium'> ADD TO CART</button>
<hr className='border-gray-400'/>

<div className='my-4 font-normal '>
    <div>
    <h3 className='mt-3 font-medium text-xl'>DESCRIPTION</h3>
    </div>
    <div>
    <h6 className='mt-3'>Contains 1 piece</h6>
    </div>
    <div>
    <h3 className='my-3 font-medium text-xl '>FABRIC:</h3>
    </div>
    <div >
    <li> Fabric: Viscose</li><li> Do Not Dry Clean</li><li>Do Not Bleach</li><li> Wash Dark Colours Separately</li>
                                    <li> Machine Wash Allowed </li>
    </div>
</div>
<hr className='border-gray-400'/>

<div className='flex flex-wrap justify-between '>
    <div>
<div className='text-xl'>
<p className='text-xl font-medium my-2 uppercase'>Review</p>
<h2> 4.6 (7 Reviews)</h2>
<div className='flex my-3 text-2xl'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><BsStarHalf /></div>

<div className='flex'> 
<div>
<p className='mt-1'>5 Stars</p>
</div>
 <div className="w-64  h-6 my-3 ml-4 bg-gray-200 rounded-full dark:bg-gray-700">
 <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[80%]"> 80%</div></div>
 </div>

 <div className='flex'> 
<div>
<p className='mt-1'>4 Stars</p>
</div>
 <div className="w-64 h-6 my-3 ml-4 bg-gray-200 rounded-full dark:bg-gray-700">
 <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[60%]">  60%</div></div>
 </div>

 <div className='flex'> 
<div>
<p className='mt-1'>3 Stars</p>
</div>
 <div className="w-64 h-6 my-3 ml-4 bg-gray-200 rounded-full dark:bg-gray-700">
 <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[40%]">  40%</div></div>
 </div>

 <div className='flex'> 
<div>
<p className='mt-1'>2 Stars</p>
</div>
 <div className="w-64  h-6 my-3  ml-4 bg-gray-200 rounded-full dark:bg-gray-700">
 <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[30%]">  30%</div></div>
 </div>

 <div className='flex'> 
<div>
<p className='mt-1'>1 Stars</p>
</div>
 <div className="w-64  h-6 my-3 ml-4 bg-gray-200 rounded-full dark:bg-gray-700">
 <div className="bg-brand text-xs font-medium text-center p-1.5 leading-none rounded-full w-[20%]">  20%</div></div>
 </div>
 <div> 
 <h5 className=' text-lg font-medium mt-5'>REVIEW THIS PRODUCT</h5>
 </div>
 <div>
 <h6 className='font-medium'>your rating :</h6>
 </div>
 <div>
 <div className='flex pl-0 mt-2 text-3xl'><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
        <button className='text-green-700 sm:ml-4 mb-5 text-lg capitalize font-medium'>Write a review</button>
</div>
 </div>
</div>
    </div>

    <div className=''>
    <div className='my-4'>
<select id="countries" className=" w-72  ml-2 border-2 border-zinc-300 bg-gray-200 rounded-md   focus:ring-black focus:border-black">
  <option selected="">Review star rating</option>
  <option value="1">1-star</option>
  <option value="2">2-star</option>
  <option value="3">3-star</option>
  <option value="4">4-star</option>
</select>
</div>

<div className=' h-[20rem]  overflow-y-auto  xl:w-[42rem] px-2 md:w-[42rem] lg:w-full'>
    <div className='my-4'>
<div>
<ul className='flex pl-0 mt-3 text-xl my-3'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></ul>
</div>
<div>
<h6 className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product <br/> by using GrabOn coupon got discount on this</h6>
</div>
<div className='flex justify-end mb-5'>
<h5 className='  mt-2 font-medium'>Helpful ?</h5>
<button className='  bg-brand text-white ml-2 w-10 h-10 rounded-md shadow-md shadow-gray-600'><AiOutlineLike className=' w-5 h-5 ml-3 ' /></button>
</div>
</div>
<hr className='border-gray-400'/>

<div className='my-2'>
<div>
<ul className='flex pl-0 mt-3 text-xl my-3'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></ul>
</div>
<div>
<h6 className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product <br/> by using GrabOn coupon got discount on this</h6>
</div>
<div className='flex justify-end mb-5'>
<h5 className='  mt-2 font-medium'>Helpful ?</h5>
<button className='  bg-brand text-white ml-2 w-10 h-10 rounded-md shadow-md shadow-gray-600'><AiOutlineLike className=' w-5 h-5 ml-3' /></button>
</div>
</div>
<hr className='border-gray-400'/>

<div className='my-2'>
<div>
<ul className='flex pl-0 mt-3 text-xl my-3'><AiFillStar /><AiFillStar /><AiFillStar /></ul>
</div>
<div>
<h6 className='review2'>arpitha chinnapelli4 month agoNice dress I have ordered this product <br/> by using GrabOn coupon got discount on this</h6>
</div>
<div className='flex justify-end mb-6'>
<h5 className='  mt-2 font-medium'>Helpful ?</h5>1``
<button className='  bg-brand text-white ml-2 w-10 h-10 rounded-md shadow-md shadow-gray-600'><AiOutlineLike className=' w-5 h-5 ml-3 ' /></button>
</div>
</div>


<hr className='border-gray-400'/>

</div>
    </div>
</div>
<hr/>

<div>
    <div className='my-4'>
    <h5 className='text-lg font-medium my-4'>CHECK DELIVERY TIME</h5>
    <input className=' h-10 border-2 flex  border-gray-400 pl-2 rounded-lg w-72' placeholder='Pincode' />
    <h5 className='pt-3 font-medium'> Dispatch in 24 hours</h5>
    <h5 className='mt-10 text-lg font-medium my-2'>SELLER INFORMATION</h5>
    <h5 className='font-medium my-2'>Generic Name : <span className='text-green-700'> Apparel Casual Wovens Apparel</span></h5>
    <h5 className='font-medium'>Sold By : <span className='text-green-700'>Select size to get seller name </span> </h5>
    </div>
</div>
<hr className='border-gray-400'/>


</div>


</div>






    </div>
  )
}

export default Detail