// courses code here
import axios from "axios";
import React, { useEffect, useState } from "react";

// use axios here, similar to register and login
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/user/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(response.data.courses);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error.response?.data?.message);
      setLoading(false);
    }
  }

  async function purchaseCourse(courseId) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/users/courses/${courseId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Success", response.data.message);
    } catch (error) {
      console.log("Error", error.response?.data?.message);
    }
  }
  if (loading) {
    return <div>Loading courses...</div>;
  }
  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map(course => (
        <div key={course._id} className="m-4 p-4">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>price: ${course.price}</p>
          <button onClick={() => purchaseCourse(course.id)}>Purchase Course</button>
        </div>

      ))}
    </div>
  )
};

export default Courses;
