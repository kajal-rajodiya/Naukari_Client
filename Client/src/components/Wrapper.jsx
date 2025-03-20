import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  

const Wrapper = ({children}) => {
  return (
   <div className='px-5 py-5'>
     <div className='h-[60px]'></div>
     <ToastContainer />
     <div>{children}</div>
   </div>
   
  )
}

export default Wrapper
