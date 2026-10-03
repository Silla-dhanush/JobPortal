import { useEffect, useState } from "react";

function MyAppliedJobs() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyApplications = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:3000/api/applications/my",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();
                setApplications(data);

            } catch (error) {
                console.error(
                    "Error fetching applied jobs:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchMyApplications();
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
                        Candidate Dashboard
                    </p>

                    <h1 className="text-3xl font-bold text-[#172B1F] md:text-4xl">
                        My Applied Jobs
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Track the jobs you have applied for.
                    </p>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-gray-600">
                        {applications.length}{" "}
                        {applications.length === 1
                            ? "application"
                            : "applications"}
                    </p>
                </div>

                {applications.length === 0 ? (

                    <div className="rounded-2xl border border-[#DDE5DE] bg-white px-6 py-16 text-center shadow-sm">

                        <h2 className="text-xl font-semibold text-[#172B1F]">
                            No applications yet
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Jobs you apply for will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 md:grid-cols-2">

                        {applications.map((application) => (

                            <div
                                key={application.application_id}
                                className="rounded-2xl border border-[#DDE5DE] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* Company */}
                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex items-center gap-4">

                                        {application.companyLogo ? (
                                            <img
                                                src={application.companyLogo}
                                                alt={application.companyName}
                                                className="h-14 w-14 rounded-xl border border-gray-100 object-contain p-2"
                                            />
                                        ) : (
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8F0EA] text-lg font-bold text-[#2F6B4F]">
                                                {application.companyName?.charAt(0)}
                                            </div>
                                        )}

                                        <div>
                                            <h2 className="text-lg font-bold text-[#172B1F]">
                                                {application.jobRole}
                                            </h2>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {application.companyName}
                                            </p>
                                        </div>

                                    </div>

                                    <span className="rounded-full bg-[#EDF4F5] px-3 py-1 text-xs font-semibold text-[#35646B]">
                                        Applied
                                    </span>

                                </div>

                                {/* Details */}
                                <div className="mt-6 grid grid-cols-2 gap-3">

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Employment
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {application.employmentType}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Work Mode
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {application.workMode}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Salary
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {application.annualSalary}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-[#F7F8F5] p-3">
                                        <p className="text-xs text-gray-500">
                                            Experience
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            {application.experienceRequired}
                                        </p>
                                    </div>

                                </div>

                                {/* Application information */}
                                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Application ID
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-[#172B1F]">
                                            #{application.application_id}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">
                                            Applied
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-[#2F6B4F]">
                                            Successfully
                                        </p>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default MyAppliedJobs;