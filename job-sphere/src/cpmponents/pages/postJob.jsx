import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbListDetailsFilled } from "react-icons/tb";
import { RiInformationOffFill } from "react-icons/ri";
import { MdOutlinePsychologyAlt } from "react-icons/md";

export default function PostJob() {

    const navigate = useNavigate();

    const [skill, setSkill] = useState("");

    const [formData, setFormData] = useState({
        companyName: "",
        companyLogo: "",
        jobRole: "",
        employmentType: "",
        annualSalary: "",
        workMode: "",
        experienceRequired: "",
        skills: []
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("token");

        // User is not logged in
        if (!token) {
            navigate("/login");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:3000/api/jobs",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log("Status:", response.status);
            console.log(data);

            if (!response.ok) {

                if (response.status === 401) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");

                    navigate("/login");
                    return;
                }

                alert(data.message);
                return;
            }

            alert("Job published successfully!");

        } catch (error) {

            console.error("Error submitting job:", error);
            alert("Something went wrong. Please try again.");

        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && skill.trim() !== "") {
            e.preventDefault();

            setFormData({ ...formData, skills: [...formData.skills, skill.trim()] });

            setSkill("");
        }
    };

    const handleDelete = (indexToDelete) => {

        setFormData({ ...formData, skills: formData.skills.filter((_, index) => index !== indexToDelete) });

    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
            <form onSubmit={handleSubmit} className="post-job container p-6 border border-gray-300 rounded-lg shadow-md w-full max-w-3xl mt-6 mb-6">
                { /* company details */}
                <div className="job-application container p-4 border border-gray-300 rounded-lg shadow-md mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <TbListDetailsFilled className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Company Details</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                            <div className="flex flex-row gap-6">
                                <input className="w-full border rounded p-2" type="text" placeholder="upload the logo here..." value={formData.companyLogo} onChange={(e) => setFormData({ ...formData, companyLogo: e.target.value })} />
                                <button type="button" className="w-auto text-white bg-blue-600 hover:bg-blue-700 rounded-2xl text-sm px-4 py-2 font-medium">Upload</button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input className="w-full border rounded p-2" type="text" placeholder="Enter Company Name" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} />
                        </div>
                    </div>
                </div>
                { /* job information */}
                <div className="job-application container p-4 border border-gray-300 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <RiInformationOffFill className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Job Information</h1>
                    </div>
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Job Role</label>
                            <input className="w-full border rounded p-2" type="text" placeholder="enter Job Role" value={formData.jobRole} onChange={(e) => setFormData({ ...formData, jobRole: e.target.value })} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                                <input className="w-full border rounded p-2" type="text" placeholder="Employment Type" value={formData.employmentType} onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Anual Salary</label>
                                <input className="w-full border rounded p-2" type="text" placeholder="Amount" value={formData.annualSalary} onChange={(e) => setFormData({ ...formData, annualSalary: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Work Mode</label>
                                <input className="w-full border rounded p-2" type="text" placeholder="Work Mode" value={formData.workMode} onChange={(e) => setFormData({ ...formData, workMode: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Experience Required</label>
                                <input className="w-full border rounded p-2" type="text" placeholder="Experience Required" value={formData.experienceRequired} onChange={(e) => setFormData({ ...formData, experienceRequired: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                { /* Skills */}
                <div className="job-application container p-4 border border-gray-300 rounded-lg shadow-md mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <MdOutlinePsychologyAlt className="text-xl text-blue-500" />
                        <h1 className="text-lg font-semibold">Required Skills</h1>
                    </div>
                    <div>
                        <input className="w-full border rounded p-2 mb-4" placeholder="skill" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} onKeyDown={handleKeyDown} />
                        <h3>Skills :</h3>
                        <div className="flex flex-wrap gap-2">
                            {
                                formData.skills?.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full" >
                                        <span>{item}</span>
                                        <button className="text-red-500 font-bold" onClick={() => handleDelete(index)}>X</button>
                                    </ div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                { /* button */}
                <div className="submit-button flex justify-end mt-4">
                    <button type="submit" className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Publish Job</button>
                </div>
            </form>
        </div>
    )
}