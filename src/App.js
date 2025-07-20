import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './CourseList';
import CoursePage from './CoursePage';

function App() {
  return (
    <Router>
      <div>
        <h1>My Awesome Courses</h1>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
