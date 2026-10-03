
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TbListDetailsFilled } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function JobApplication() {

    const { id } = useParams();

    const [job, setJob] = useState(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
        portfolio: "",
        previousCompany: "",
        position: "",
        duration: "",
        experience: ""
    });

    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch selected job
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/jobs"
                );

                const data = await response.json();

                const selectedJob = data.find(
                    (job) => job.id === Number(id)
                );

                setJob(selectedJob);

            } catch (error) {
                console.error("Error fetching job:", error);
            }
        };

        fetchJob();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle resume selection
    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    // Submit application
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {

            // Get JWT token from localStorage
            const token = localStorage.getItem("token");

            if (!token) {
                setMessage("Please login before applying.");
                setLoading(false);
                return;
            }

            const response = await fetch(
                "http://localhost:3000/api/applications",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        jobId: Number(id),

                        fullName: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,

                        linkedin: formData.linkedin,
                        github: formData.github,
                        portfolio: formData.portfolio,

                        // For now resumeUrl is empty.
                        // We will connect AWS S3 later.
                        resumeUrl: "",

                        previousCompany: formData.previousCompany,
                        position: formData.position,
                        duration: formData.duration,
                        experience: formData.experience
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Application failed");
                setLoading(false);
                return;
            }

            setMessage(
                `Application submitted successfully! Application ID: ${data.applicationId}`
            );

            // Clear form after successful submission
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                address: "",
                linkedin: "",
                github: "",
                portfolio: "",
                previousCompany: "",
                position: "",
                duration: "",
                experience: ""
            });

            setResume(null);

        } catch (error) {

            console.error("Application Error:", error);

            setMessage("Something went wrong. Please try again.");

        } finally {
            setLoading(false);
        }
    };

    if (!job) {
        return <p className="p-6">Loading job details...</p>;
    }

    return (
        <div className="job-application-page flex container mx-auto p-4">

            {/* Job Details */}
            <div className="job-details w-1/3 p-4">

                <div className="job-cards-container gap-4 justify-center p-6">

                    <div
                        key={job.id}
                        className="job-card flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md"
                    >

                        <h3 className="job-role text-lg font-bold">
                            {job.jobRole}
                        </h3>

                        <div className="flex items-center gap-2">
                            <p>{job.companyName}</p>

                            <p className="company-name text-black-50 text-xs max-w-xs p-1">
                                {job.workMode}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">

                            <p className="type bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1">
                                {job.employmentType}
                            </p>

                            <p className="work-mode bg-green-50 text-black-50 text-xs rounded max-w-xs p-1">
                                {job.workMode}
                            </p>

                            <p className="stipend bg-yellow-50 text-black-50 text-xs rounded max-w-xs p-1">
                                {job.annualSalary}
                            </p>

                        </div>

                        <p className="experience text-black-50 text-xs max-w-xs p-1">
                            {job.experienceRequired}
                        </p>

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2 flex-wrap">

                                {job.skills?.map((skill, index) => (

                                    <span
                                        key={index}
                                        className="skill bg-blue-50 text-black-50 text-xs rounded max-w-xs p-1"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Application Form */}
            <div className="job-application container p-4 border border-gray-300 rounded-lg shadow-md w-3/6">

                <div className="flex items-center gap-2 mb-4">

                    <h1 className="text-lg font-semibold">
                        Job Application Details
                    </h1>

                </div>


                {/* IMPORTANT:
                    One form wraps all sections.
                */}
                <form onSubmit={handleSubmit}>

                    {/* Personal Information */}
                    <div className="personal-info p-4 border border-gray-300 rounded-lg shadow-md">

                        <div className="flex items-center gap-2 mb-4">

                            <FaPersonDotsFromLine className="text-xl text-blue-500" />

                            <h1 className="text-lg font-semibold">
                                Personal Information
                            </h1>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Address
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                />

                            </div>

                        </div>

                    </div>


                    {/* Professional Links */}
                    <div className="professional-links p-4 border border-gray-300 rounded-lg shadow-md mt-4">

                        <div className="flex items-center gap-2 mb-4">

                            <IoLinkSharp className="text-xl text-blue-500" />

                            <h1 className="text-lg font-semibold">
                                Professional Links
                            </h1>

                        </div>

                        <div className="grid grid-cols-3 gap-4">

                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    LinkedIn
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="Enter your LinkedIn profile URL"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    GitHub
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    placeholder="Enter your GitHub profile URL"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Portfolio
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="portfolio"
                                    value={formData.portfolio}
                                    onChange={handleChange}
                                    placeholder="Enter your portfolio URL"
                                />

                            </div>

                        </div>

                    </div>


                    {/* Resume Upload */}
                    <div className="resume-upload p-4 border border-gray-300 rounded-lg shadow-md mt-4">

                        <div className="flex items-center gap-2 mb-4">

                            <FaCloudUploadAlt className="text-xl text-blue-500" />

                            <h1 className="text-lg font-semibold">
                                Resume Upload
                            </h1>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Upload Resume
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleResumeChange}
                                />

                            </div>

                        </div>

                    </div>


                    {/* Experience Details */}
                    <div className="experience-details p-4 border border-gray-300 rounded-lg shadow-md mt-4">

                        <div className="flex items-center gap-2 mb-4">

                            <TbListDetailsFilled className="text-xl text-blue-500" />

                            <h1 className="text-lg font-semibold">
                                Experience Details
                            </h1>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="previousCompany"
                                    value={formData.previousCompany}
                                    onChange={handleChange}
                                    placeholder="Enter your previous company name"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Position
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    placeholder="Enter your previous position"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Duration
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    placeholder="Enter your experience duration"
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700">
                                    Experience
                                </label>

                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder="Enter your experience details"
                                />

                            </div>

                        </div>

                    </div>


                    {/* Message */}
                    {message && (

                        <p className="mt-4 text-sm font-medium">
                            {message}
                        </p>

                    )}


                    {/* Submit Button */}
                    <div className="submit-button flex justify-end mt-4">

                        <button
                            type="submit"
                            disabled={loading}
                            className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none disabled:opacity-50"
                        >
                            {loading
                                ? "Submitting..."
                                : "Submit Application"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


