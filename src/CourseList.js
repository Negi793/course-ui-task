import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: "React Basics", instructor: "Negi" },
  { id: 2, title: "Node.js Essentials", instructor: "Alisha" },
];

function CourseList() {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.title} by {course.instructor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
