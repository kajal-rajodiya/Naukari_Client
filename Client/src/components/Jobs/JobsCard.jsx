import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaClock, FaRupeeSign } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineStickyNote2 } from "react-icons/md";
import { baseApi } from '../../api/axiosInstance';
import { toast } from 'react-toastify';

const JobsCard = ({ id, title, company, employmentType, location, description, datePosted, experience, salary, userId }) => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
    },[])

    const handleCompanySubmit = async (_id) => {
        try {
            const response = await baseApi.post(`/apply/${_id}`, {},{headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
            toast.success('thank you for applying to the post',{
                position:'top-right',
                autoClose:5000,
                closeOnClick:true
            });
        } catch (error) {
           toast.error("error in applying to the job post",{
            position:'top-right',
            autoClose:5000,
            closeOnClick:true
           })
        }
    };

    return (
        <div className='w-[80%] m-auto bg-white my-[20px] p-4 rounded-[12px] flex flex-col gap-2 shadow-md'>
            <p className='text-[20px] font-bold'>{title}</p>
            <p className='text-gray-400'>{company}</p>

            {/* Job Type and Location */}
            <div className='flex gap-2'>
                <div className='flex items-center gap-2'>
                    <FaBriefcase />
                    {employmentType}
                </div>
                <div className='flex items-center gap-1'>
                    <MdOutlineLocationOn />
                    {location}
                </div>
            </div>

            {/* Experience and Salary */}
            <div className='flex gap-4 mt-1'>
                <div className='flex items-center gap-2'>
                    <FaClock className="text-blue-500" /> 
                    <span>{experience ? `${experience} years` : 'Not specified'}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <FaRupeeSign className="text-green-500" />
                    <span>{salary ? `₹${salary.toLocaleString()}` : 'Not specified'}</span>
                </div>
            </div>

            {/* Description */}
            <div className='flex gap-1 mt-1'>
                <MdOutlineStickyNote2 />
                {description?.substring(0, 50)}...
            </div>

            {/* Date Posted */}
            <div className='mt-2'>
                <p className='text-[12px] text-gray-500'>{datePosted}</p>
            </div>

            {/* Apply Button */}
            <div className='flex justify-end'>
                <button
                    onClick={() => handleCompanySubmit(id)} 
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobsCard;
