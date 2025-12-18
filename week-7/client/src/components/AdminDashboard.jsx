import axios from "axios";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
    published: false,
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/admin/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(response.data.courses);
    } catch (err) {
      console.log("Error: ", err.response?.data?.message);
    }
  }

  async function createCourse() {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3000/admin/courses", newCourse, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchCourses();
      setShowForm(false);
      setNewCourse({
        title: "",
        description: "",
        price: "",
        imageLink: "",
        published: false,
      });
    } catch (err) {
      console.log("Error", err.response?.data?.message);
    }
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add New"}
      </button>

      {showForm && (
        <div className="p-4 border m-4">
          <input
            type="text"
            placeholder="Title"
            value={newCourse.title}
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
            className="block mb-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Description"
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse({ ...newCourse, description: e.target.value })
            }
            className="block mb-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Price"
            value={newCourse.price}
            onChange={(e) =>
              setNewCourse({ ...newCourse, price: e.target.value })
            }
            className="block mb-2 p-2 border"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newCourse.imageLink}
            onChange={(e) =>
              setNewCourse({ ...newCourse, imageLink: e.target.value })
            }
            className="block mb-2 p-2 border"
          />
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={newCourse.published}
              onChange={(e) =>
                setNewCourse({ ...newCourse, published: e.target.checked })
              }
              className="block mb-2 p-2 border"
            />
            Published
          </label>
          <button onClick={createCourse} className="bg-blue-500 text-white p-2">
            Create Course
          </button>
        </div>
      )}
      <div>
        <h3>All Courses</h3>
        {courses.map((course) => (
          <div key={course._id} className="border p-4 m-2">
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <p>Status: {course.published ? "Published" : "Draft"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
