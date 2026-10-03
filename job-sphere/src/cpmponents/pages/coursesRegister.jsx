import { Courses } from "../../data/courses"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { MdOutlineFilePresent } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function CoursesRegister() {

    const { id } = useParams();
    const course = Courses.find((job) => job.id === parseInt(id));

    return (
        <div>
            <div key={course.id} className=" flex gap-6 items-start max-w-7xl mx-auto px-8 py-10">
                <div className="w-[68%]">
                    <h1 className="font-bold text-2xl mb-4">Course Details</h1>
                    <div className="course-data flex flex-col gap-4 container p-6 border border-gray-300 rounded-lg shadow-md">
                        <div className="flex flex-col gap-4">
                            <img className="w-full h-120 backdrop-blur-2xl p-6" src={course.image} alt={course.name} />
                            <h1 className="font-bold text-3xl ps-5">{course.courseName}</h1>
                        </div>
                        <div className="flex gap-4 ps-5">
                            <div className="flex gap-2 items-center text-amber-500 font-bold rounded-lg max-w-fit p-1">
                                < FaStar />
                                <span> {course.rating}<span className="text-black">(2,450 ratings)</span></span>
                            </div>
                            <div className="flex gap-2 items-center text-black-500 font-bold rounded-lg max-w-fit p-1">
                                < MdPeople />
                                <span>{course.registeredPeople}</span>
                            </div>
                        </div>
                        <div>
                            <div className="border-t border-gray-400 mx-auto ps-5"></div>
                        </div>
                        <div className="flex item-center gap-10 ps-5">
                            <div>
                                <p className="text-xs">CATEGORY</p>
                                <span>{course.category}</span>
                            </div>
                            <div>
                                <p className="text-xs">DURATION</p>
                                <span>{course.duration}</span>
                            </div>
                            <div>
                                <p className="text-xs">LEVEL</p>
                                <span>{course.level}</span>
                            </div>
                            <div>
                                <p className="text-xs">LANGUAGE</p>
                                <span>{course.language}</span>
                            </div>
                            <div>
                                <p className="text-xs">START DATE</p>
                                <span className="text-blue-300">{course.startDate}</span>
                            </div>
                        </div>
                        <div>
                            <div className="border-t border-gray-400 mx-auto py-4 ps-5"></div>
                        </div>
                    </div>
                    <div className="course-data flex flex-col gap-2 container p-10 border border-gray-300 rounded-lg shadow-md my-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-bold text-2xl">Description</h2>
                            <p className="leading-7" >{course.description}</p>
                        </div>
                        <div>
                            <div className="course-data flex flex-col gap-4 container p-10 border border-gray-300 rounded-lg shadow-md bg-gray-200 my-4">
                                <h1 className="font-bold text-2xl">What You'll Learn</h1>
                                <div className=" grid grid-cols-2 gap-3 ">
                                    {course.whatYouWillLearn.map((whyole, index) => (
                                        <p className="flex item-center text-base gap-2" key={index}> <span className="text-blue-600 text-xl"><AiOutlineCheckCircle /></span>{whyole}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between my-10 p-4">
                                <div className="flex flex-col w-1/2 ">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex item-center gap-4 text-lg">
                                            < MdOutlineFilePresent className="flex item-center text-xl" />
                                            <h4>Prerequisites</h4>
                                        </div>
                                        <p className="flex flex-col ps-5">
                                            {course.prerequisites.map((prereq, index) => (
                                                <li key={index}>{prereq}</li>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex item-center gap-4 text-lg">
                                            <GrCertificate classname="flex item-center text-xl" />
                                            <h4 >Professional Certificate</h4>
                                        </div>
                                        <p className="leading-7">Receive a verified digital certificate upon<br /> successful completion of the final project and<br /> assessments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[32%] min-w-[360px]">
                    <h1 className="font-bold text-xl mb-4">Secure Your Seat</h1>
                    <form>
                        <div className="container p-4 border border-gray-300 rounded-lg shadow-md">
                            <div className="flex gap-4 flex-col personal-info p-4 border border-gray-300 rounded-lg shadow-md mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="John Doe"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Adress</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="John@gmail"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="91+ 00000 00000"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">University</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="Standford University"></input>
                                </div>
                            </div>
                            <div className="personal-info p-4 border border-gray-300 rounded-lg shadow-md grid grid-cols-2 gap-4  mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="BE. CSE"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Year</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="2028-02-01"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Linked In</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="https://linkedin.com.in"></input>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Git Hub</label>
                                    <input className="w-full border rounded p-2" type="text" name="fullName" placeholder="https://github.com.in"></input>
                                </div>
                            </div>
                            <div className="personal-info p-4 border border-gray-300 rounded-lg shadow-md gap-4  mb-4">
                                <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
                                <input className="w-full border rounded p-2" type="file" name="resume" accept=".pdf,.doc,.docx"></input>
                            </div>
                            <div className="personal-info p-4 border border-gray-300 rounded-lg shadow-md mb-4">
                                <h2 className=" font-medium text-gray-700 mb-4">Payment Method</h2>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <button className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Card</button>
                                    <button className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">PayPal</button>
                                    <input className="w-full border rounded-2xl p-2" placeholder="Coupon Code"></input>
                                    <button type="button" className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Apply</button>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="font-medium">Total Enrollment Fee</p>
                                    <p className="font-bold text-lg">${course.price}</p>
                                </div>
                                <button type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-2xl text-sm py-3 font-medium">Register</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}