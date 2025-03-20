import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const CategoryCard = ({ categoryIcon:Icon, categoryText, categoryLink }) => {
    return (
        <Link to={categoryLink}>
            <div className='flex p-5 font-bold border border-gray-100 rounded-md justify-between w-[150px] items-center'>

            <div>{Icon && <Icon />}</div> 
                <div>{categoryText}</div>
                <div><IoIosArrowForward /></div>
            </div>
        </Link>
        )
}
export default CategoryCard
