import { useEffect, useState } from "react";

function MyPostedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyJobs = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:3000/api/jobs/my",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();
                setJobs(data);

            } catch (error) {
                console.error("Error fetching my jobs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyJobs();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F7F8F5] px-6 py-10">
                <div className="mx-auto max-w-6xl">
                    <div className="h-8 w-56 animate-pulse rounded-lg bg-gray-200" />
                    <div className="mt-8 h-48 animate-pulse rounded-2xl bg-white" />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F7F8F5] px-6 py-10">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#2F6B4F]">
                        Employer Dashboard
                    </p>

                    <h1 className="text-3xl font-bold text-[#172B1F] md:text-4xl">
                        My Posted Jobs
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Manage the jobs you have posted.
                    </p>
                </div>

                {/* Job count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        {jobs.length} {jobs.length === 1 ? "job" : "jobs"} posted
                    </p>
                </div>

                {/* Jobs */}
                {jobs.length === 0 ? (

                    <div className="rounded-2xl border border-[#DDE5DE] bg-white px-6 py-16 text-center shadow-sm">

                        <h2 className="text-xl font-semibold text-[#172B1F]">
                            No jobs posted yet
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Jobs you post will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2">

                        {jobs.map((job) => (

                            <div
                                key={job.id}
                                className="group rounded-2xl border border-[#DDE5DE] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex items-center gap-4">

                                        {job.companyLogo ? (
                                            <img
                                                src={job.companyLogo}
                                                alt={job.companyName}
                                                className="h-14 w-14 rounded-xl border border-gray-100 object-contain p-2"
                                            />
                                        ) : (
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F0EA] text-lg font-bold text-[#2F6B4F]">
                                                {job.companyName?.charAt(0)}
                                            </div>
                                        )}

                                        <div>
                                            <h2 className="text-lg font-bold text-[#172B1F]">
                                                {job.jobRole}
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {job.companyName}
                                            </p>
                                        </div>

                                    </div>

                                    <span className="rounded-full bg-[#E8F0EA] px-3 py-1 text-xs font-semibold text-[#2F6B4F]">
                                        Posted
                                    </span>

                                </div>

                                {/* Details */}
                                <div className="mt-6 grid grid-cols-2 gap-3">

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Employment
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {job.employmentType}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Work Mode
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {job.workMode}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Salary
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {job.annualSalary}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Experience
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {job.experienceRequired}
                                        </p>
                                    </div>

                                </div>

                                {/* Skills */}
                                {job.skills && (
                                    <div className="mt-5">

                                        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                                            Skills
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            {(Array.isArray(job.skills)
                                                ? job.skills
                                                : JSON.parse(job.skills)
                                            ).map((skill, index) => (

                                                <span
                                                    key={index}
                                                    className="rounded-full border border-[#CFE0D2] bg-[#F4F8F4] px-3 py-1 text-xs font-medium text-[#2F6B4F]"
                                                >
                                                    {skill}
                                                </span>

                                            ))}

                                        </div>

                                    </div>
                                )}

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default MyPostedJobs;