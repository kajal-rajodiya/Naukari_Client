import React from 'react'

const FormInput = ({ labelText, inputType, inputPlaceholder, required,value, onChange ,name}) => {
    return (
        <div className='my-3'>
            <div className='' >
                <label htmlFor="" className='font-bold'>{labelText}</label>
                {
                    required ? <sup className='text-red-500 text-[12px]'>*</sup> : ""
                }
            </div>
            <div className='my-2'>
                <input type={inputType} placeholder={inputPlaceholder} required={required} value={value}
                    onChange={onChange} name={name} className='border border-gray-100 rounded-md px-5 py-1 w-[80%] ' />
            </div>
        </div>
    )
}

export default FormInput
