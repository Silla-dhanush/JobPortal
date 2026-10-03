import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setIsLoggedIn(false);

        navigate("/login");
    };

    return (
        <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
        >

            {/* Logo */}
            <div className="flex lg:flex-1">
                <Link
                    to="/"
                    className="-m-1.5 p-1.5 flex items-center gap-x-2"
                >
                    <span className="text-xl font-bold text-blue-600">
                        JobSphere
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <div className="hidden lg:flex lg:gap-x-12">
                <Link
                    to="/jobs"
                    className="text-sm/6 font-semibold text-blue-500"
                >
                    Opportunities
                </Link>

                <Link
                    to="/preparation"
                    className="text-sm/6 font-semibold text-blue-500"
                >
                    Preparation
                </Link>

                <Link
                    to="/courses"
                    className="text-sm/6 font-semibold text-blue-500"
                >
                    Courses
                </Link>
            </div>

            {/* Authentication buttons */}
            <div className="hidden lg:flex lg:flex-1 gap-4 lg:justify-end">

                {isLoggedIn ? (
                    <>
                        <span className="flex items-center text-sm font-semibold text-gray-700">
                            {user?.userName}
                        </span>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none"
                    >
                        Login
                    </button>
                )}

                {/* Post Job */}
                <button
                    type="button"
                    onClick={() => navigate("/postJob")}
                    className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none"
                >
                    Post a Job
                </button>

            </div>
        </nav>
    );
}

