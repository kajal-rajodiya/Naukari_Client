import React, { useEffect, useState } from 'react';
import JobsCard from '../Jobs/JobsCard';
import { baseApi } from '../../api/axiosInstance';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllJobs = async () => {
        try {
            setIsLoading(true);
            const response = await baseApi.get('/job/details');
            if (response?.data) {
                const formattedJobs = response.data.map(job => ({
                    id: job?.id || job?._id || null, // ✅ Ensuring ID is defined
                    title: job?.title || '',
                    company: job?.company?.name || job?.company || '',
                    employmentType: job?.type || '',
                    location: job?.location || '',
                    experience: job?.experience || 0,
                    salary: job?.salary || 0,
                    description: job?.jobDescription || '',
                    datePosted: job?.createdAt || ''
                }));
                setJobs(formattedJobs);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching job posts:', error);
            toast.error('Failed to fetch job posts.');
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAllJobs();
    }, []);

    return (
        <div>
            <div className='w-[80%] m-auto'>
                {jobs && jobs.map((job) => (
                    job.id && ( // ✅ Only render if ID is defined
                        <JobsCard 
                            key={job.id}
                            id={job.id} 
                            title={job.title} 
                            company={job.company} 
                            employmentType={job.employmentType} 
                            location={job.location} 
                            description={job.description}
                            datePosted={job.datePosted} 
                            experience={job.experience} 
                            salary={job.salary} 
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default Jobs;
