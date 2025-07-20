import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Negi",
    description: "Learn React fundamentals like components, props, and hooks.",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
  },
  {
    id: 2,
    title: "Node.js Essentials",
    instructor: "Alisha",
    description: "Understand the basics of Node.js and backend development.",
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
  },
];

function CoursePage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Awesome Courses</h1>

      <div style={styles.card}>
        <h2 style={styles.title}>{course.title}</h2>
        <p style={styles.instructor}>Instructor: {course.instructor}</p>
        <p style={styles.description}>{course.description}</p>

        <div style={styles.videoWrapper}>
          <iframe
            width="100%"
            height="315"
            src={course.videoUrl}
            title="Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <button style={styles.button}>Enroll Now</button>

        <div style={styles.backLink}>
          <Link to="/" style={styles.link}>← Go Back to Course List</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: '#333',
  },
  card: {
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#2c3e50',
  },
  instructor: {
    color: '#7f8c8d',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: 25,
    height: 0,
    marginBottom: '1.5rem',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  backLink: {
    marginTop: '1rem',
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default CoursePage;
