
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";


export default function JobCard() {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const response = await fetch(
          "http://localhost:3000/api/jobs"
        );

        const data = await response.json();

        setJobs(data);

      } catch (error) {

        console.error("Error fetching jobs:", error);

      }
    };

    fetchJobs();

  }, []);

  return (
    <div id="opportunities" className="job-cards-section container mx-auto w-3/4">
      <div className="flex justify-between mt-10 items-center">
        <h2 className="text-2xl font-bold">Latest Job Opportunities</h2>
        <Link to="/jobs" className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700">
          <span>View All Jobs</span>
          <GoArrowRight />
        </Link>

      </div>
      <div className="job-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10 p-4">
        {jobs.slice(0, 3).map((job, index) => (
          <div
                            key={index}
                            className="job-card flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md"
                        >
                            <h3 className="job-role text-lg font-bold">{job.jobRole}</h3>
                            <div className="flex items-center gap-2">
                                <p>{job.companyName}</p>
                                {/* <p className="company-name text-black-50 text-xs max-w-xs p-1">{job.location}</p> */}
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="type bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">{job.employmentType}</p>
                                <p className="work-mode bg-green-50 text-black-50 text-xs rounded max-w-xs p-1">{job.workMode}</p>
                                <p className="stipend bg-yellow-50 text-black-50 text-xs rounded max-w-xs p-1">{job.annualSalary}</p>
                            </div>
                            <p className="experience text-black-50 text-xs max-w-xs p-1">{job.experienceRequired}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {job.skills?.map((skill, index) => (
                                        <span key={index} className="skill bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">{skill}</span>
                                    ))}
                                </div>
                                <button onClick={() => { console.log(job._id); navigate(`/apply/${job.id}`); }} type="button" className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Apply Now</button>
                            </div>


                        </div>
        ))}
      </div>
    </div>

  );
}
