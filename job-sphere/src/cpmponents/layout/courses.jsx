import { Courses as coursesData } from "../../data/courses";
import { CiTimer } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Courses() {
    const navigate = useNavigate();
    return (
        <div id="courses" className="courses-section container mx-auto w-3/4">
            <div className="flex justify-between mt-10 items-center">
                <h1 className="text-2xl font-bold ">Courses</h1>
                <Link to="/courses" className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700">
                    <span>View All Courses</span>
                    <GoArrowRight />
                </Link>
            </div>
            <div className="courses-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10 p-4">
                {
                    coursesData.slice(0,3).map((course) => (
                        <div key={course.id} className="course-card flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-md">
                            <img src={course.image} alt={course.courseName} />
                            <div className="flex gap-4 items-center">
                                <h2 className="text-lg font-bold">{course.courseName}</h2>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex gap-2 items-center">
                                    <CiTimer />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <CiCalendar />
                                    <span>{course.startDate}</span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center bg-blue-100 text-black-50 font-medium rounded-lg max-w-fit p-1">
                                <IoPeopleSharp className="text-blue-500" />
                                <p>{course.registeredPeople}</p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => {console.log(course.id); navigate(`/courses/register/${course.id}`)}} type="button" className="text-white bg-blue-400 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none">Register Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}