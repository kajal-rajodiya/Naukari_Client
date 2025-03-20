import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { footLinks } from '../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-10 '>
            <div className='flex w-[60%] m-auto gap-10'>
                <div>
                    <div> <img src='https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg ' alt='logo' /> </div>
                    <div className='my-7'>
                        <div><p className='text-[20px] font-bold'>Connect with us.</p></div>
                        <div className='flex gap-3 my-3'>
                            <TiSocialTwitter />
                            <TiSocialLinkedin />
                            <SlSocialInstagram />
                            <TiSocialFacebookCircular />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 text-[14px] font-weight-500 gap-4 '>
                    {
                        footLinks.map((link) => (
                            <Link to={link.path} key={link.id}>{link.name}</Link>
                        ))
                    }
                </div>
                <div className='border border-gray-100 p-8  flex flex-col justify-between rounded-md shadow-md'>
                   <div>
                   <p className='text-lg font-bold'>Apply on the Go</p>
                   <p className='text-sm text-gray-600 mt-8'>Get real-time job updates on our App</p>
                   </div>
                    <div className='flex gap-3'>
                        <img className='w-[100px] h-auto' src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png" alt="Android App" />
                        <img className='w-[100px] h-auto' src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app_v1.png" alt="iOS App" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Footer
