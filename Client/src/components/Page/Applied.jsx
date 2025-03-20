import React, { useEffect, useState } from 'react';
import { baseApi } from '../../api/axiosInstance';

const Applied = () => {
    const [jobs, setJobs] = useState([]);
    const [user, setUser] = useState(null);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Fetch user from localStorage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    const getAllApplies = async ()=>{
        const response = await baseApi.get("/apply/details");
        console.log(response.data)
        setJobs(response.data[0].jobs)
    }
    useEffect (()=>{
        getAllApplies();
    },[])

    const filterAllApplies = () =>{
        return jobs?.filter((job) => job.userId === user?.id)
    }
    useEffect(()=>{
        let job = filterAllApplies();
    })
    return (
        <div>
            <div className='flex w-[60%] bg-white m-auto mt-20 mb-10 p-4 rounded-md'>
              {
               jobs?.map((job) => (
                <div key={job._id}>{job.title}</div>
            ))
            }
            </div>
        </div>
    );
};

export default Applied;
