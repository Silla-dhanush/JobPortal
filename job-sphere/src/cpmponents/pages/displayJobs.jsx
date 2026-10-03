import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function DisplayJobs() {

    const navigate = useNavigate();

    const handleSearch = async () => {
        const res = await fetch(
            `http://localhost:3000/api/jobs?search=${search}`
        );

        const data = await res.json();
        setJobs(data);
    };

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/jobs")
            .then(response => response.json())
            .then(data => {
                console.log("DATA FROM BACKEND:", data);
                setJobs(data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    const [search, setSearch] = useState("");

    const filteredJobCards = jobs.filter((job) => {
        const searchTerm = search.toLowerCase();
        return (
            job.jobRole?.toLowerCase().includes(searchTerm) ||
            job.companyName?.toLowerCase().includes(searchTerm) ||
            job.employmentType?.toLowerCase().includes(searchTerm) ||
            job.workMode?.toLowerCase().includes(searchTerm) ||
            job.experienceRequired?.toLowerCase().includes(searchTerm) ||
            job.annualSalary?.toLowerCase().includes(searchTerm) ||
            job.skills?.some(skill =>
                skill.toLowerCase().includes(searchTerm)
            )
        );
    });

    return (
        <div>
            <div>
                <img src={`${import.meta.env.BASE_URL}images/screen.png`} alt="Job Search" className="w-full max-w-7xl h-[340px] rounded-3xl mx-auto" />
            </div>
            <div className="relative w-full max-w-2xl mx-auto mt-4">
                < FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:border-blue-500" type="text" placeholder="Search roles, job type, skills or companies..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-5 py-1 rounded-lg hover:bg-blue-600" onClick={handleSearch}>Search</button>
            </div>
            <div>
                <div className="job-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10 p-4 w-3/4 mx-auto">
                    {filteredJobCards.map((job, index) => (
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
        </div>
    )
}