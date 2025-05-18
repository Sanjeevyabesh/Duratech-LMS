import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: "React Basics", description: "Learn the fundamentals of React.js" },
  { id: 2, title: "Advanced JavaScript", description: "Deep dive into JS concepts" },
  { id: 3, title: "UI/UX Design", description: "Principles of great interface design" },
  { id: 4, title: "Data Structures", description: "Understanding data organization" },
  { id: 5, title: "Machine Learning", description: "Introduction to ML algorithms" },
  { id: 6, title: "Web Development", description: "Building modern web applications" },
  { id: 7, title: "Cloud Computing", description: "Basics of cloud services and architecture" },
  { id: 8, title: "Cybersecurity", description: "Protecting systems and networks" },
];

export default function CourseList() {
  return (
    <div className="page-container">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <strong>{course.title}</strong> - {course.description}
            </Link>
          </li>
          
        ))}
        
      </ul>
    </div>
  );
}


