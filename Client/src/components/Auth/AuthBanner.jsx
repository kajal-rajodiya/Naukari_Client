import React from 'react'
import { authBannerFeaturs } from '../utils/constants';
import { FaCheckCircle } from "react-icons/fa";

const AuthBanner = () => {
    return (
        <div className='border border-gray-100 rounded-md shadow-lg bg-white text-center px-2 py-10'>
            <div>
                <div className='border  border-gray-100 w-[60%] m-auto'>
                    <img src='https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png' alt='' className='w-[200px] h-[200px]' />
                </div>
                <div>
                    <p>On registering, you can</p>
                </div>
                <div className='my-5'>
                    {
                        authBannerFeaturs.map((feature) => (
                            <div className='flex items-center gap-2' key={feature.id}>
                                <div><FaCheckCircle className="text-green-500" /></div>
                                <div className='text-[16px]'>{feature.text} </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default AuthBanner
