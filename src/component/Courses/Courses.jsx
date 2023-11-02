import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleCredit}) => {
    const [courses, setCourses]= useState([]);

    useEffect(() => {
        fetch('/public/courses.json')
        .then (res => res.json())
        .then(data=> setCourses(data))
    },[])



    return (
        <div className="md:w-2/3  mx-5 py-8 ">
            <div className="">
            <h1 className="text-2xl font-semibold ">Courses : {courses.length}</h1>
           <div  className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
           {
                courses.map(course => <Course key={course.id}  course={course}

                    handleCredit={handleCredit}
                    
                    ></Course>)
            }
           </div>
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleCredit: PropTypes.func
}
export default Courses;