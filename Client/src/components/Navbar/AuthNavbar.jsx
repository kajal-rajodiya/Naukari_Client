import React from 'react';
import NavLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
    return (
        <nav className='h-[60px] bg-white fixed w-full flex items-center shadow-md'>
            <div className='flex items-center w-[60%] m-auto justify-between'>
                {/* Logo Section */}
                <div className='flex w-[50%] items-center justify-between'>
                    <Link to='/'>
                        <div>
                            <img src={NavLogo} alt='logo.svg' />
                        </div>
                    </Link>
                </div>

                {/* Register/Login Section */}
                <div className='flex gap-4 font-bold'>
                    <Link to="/register" className="text-blue-700 hover:underline">
                        Register
                    </Link>
                    <span>|</span>
                    <Link to="/login" className="text-blue-700 hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default AuthNavbar;
