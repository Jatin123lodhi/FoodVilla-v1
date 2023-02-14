import { useState } from "react";

 
const Crousal = ()=>{
    const CROUSAL_CDN = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/';
    const crousalIds = ['yparhmxrby5lv0ubsel4','pneknawbadtvceqzwiep','dpqcjrxwruipnt1wyqnh','lyn9at38gjithnogzfui','jmeoz6zu9fi0h9tw7xrb','s5ug2key6e2sptaxku5v'];
     
    return(
        <div className="flex justify-center items-center bg-slate-900 p-2">
             
             <button onClick={()=>{document.getElementById('box').scrollLeft -= 265 }} className=" text-black bg-white px-2 py-2  rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button> 
            <div className="w-[68%] h-72  p-4 relative overflow-hidden">
                <div className="flex  w-full  absolute   py-2 overflow-x-auto scroll-smooth " id="box">
                    {crousalIds.map((id)=> <img key={id} className="w-60 m-2 p-2 rounded-2xl" alt="someImg" src={CROUSAL_CDN+id} />)} 
                </div>
            </div>
              <button onClick={()=>{document.getElementById('box').scrollLeft += 265 }} className="ml-2 text-black bg-white px-2 py-2  rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    );
}

export default Crousal;