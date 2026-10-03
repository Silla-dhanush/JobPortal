import { FaMessage } from "react-icons/fa6";

export default function Newsetler(){
    return (
        <div className = "space-y-6 newsletter-container bg-sky-200 p-28 rounded-lg justify-items-center w-3/4 mx-auto mt-10 text-center">
            <FaMessage size={30} color="blue" />
            <h1 className = "text-2xl font-bold mb-4">Stay Updated with JobSphere</h1>
            <p className = "text-center">Subscribe to our newsletter for the latest job postings, career <br/>advice, and industry insights delivered directly to your inbox.</p>
            <div className = "flex items-center gap-4 mt-4">
                <input type="email" placeholder="Enter your email" className="bg-white w-3/4 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"/>
                <button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-6 py-2.5 focus:outline-none">Subscribe</button>
            </div>
            <p className="text-sm text-gray-600">We respect your privacy. Unsubscribe at any time.</p>
        </div>
    )
}