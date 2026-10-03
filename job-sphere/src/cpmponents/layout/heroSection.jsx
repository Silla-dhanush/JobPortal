import { useNavigate } from "react-router-dom";
export default function HeroSection() {

    const navigate = useNavigate();

    return(
        <div id="preparation" className = "flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-gray-100 rounded-lg mx-auto w-3/4 mt-10">
            <div>
                <h1 className="text-3xl font-bold text-heading p-2">Find Your <span className="text-blue-600">Dream Job</span> & Build Your Career</h1>
                <p className="text-body p-2">Connecting top talent with world-class opportunities. Discover internships and full-time roles tailored for you.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none" onClick={() => navigate("/myPostedJobs")}>My Posted Jobs</button>
                    <button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none" onClick={() => navigate("/myAppliedJobs")}>My Applied Jobs</button>
                </div>
            </div>
            <div>
                <img className="w-full h-auto bg-gray-200 backdrop-blur-2xl" src={`${import.meta.env.BASE_URL}images/screen1.png`} alt="Google" />
            </div>
        </div>
    )
}