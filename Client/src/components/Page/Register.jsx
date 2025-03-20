import React from 'react'
import AuthBanner from '../Auth/AuthBanner'
import RegisterForm from '../Auth/RegisterForm'

const Register = () => {
    return (
        <div className='px-5 py-10'>
            <div className='w-[80%] border border-gray-100 m-auto flex gap-10 '>
                {/* left div */}
                <div>
                    <AuthBanner />
                </div>
                {/* right div */}
                <div className='w-[80%]'>
               <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register
