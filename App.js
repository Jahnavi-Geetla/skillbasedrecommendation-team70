import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const courses = {
    javascript: [
      { title: "JavaScript Essentials", url: "https://example.com/js-essentials" },
      { title: "Advanced JavaScript", url: "https://example.com/advanced-js" }
    ],
    python: [
      { title: "Python for Beginners", url: "https://example.com/python-beginners" },
      { title: "Data Analysis with Python", url: "https://example.com/data-analysis-python" }
    ],
    "html-css": [
      { title: "HTML & CSS Basics", url: "https://example.com/html-css-basics" },
      { title: "Responsive Web Design", url: "https://example.com/responsive-web-design" }
    ]
    // Add more skills and courses as needed
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSkillSelection = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedSkills(selectedOptions);
  };

  const getRecommendations = () => {
    const recommendedCourses = selectedSkills.flatMap(skill => courses[skill] || []);
    setRecommendations(recommendedCourses);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div id="login-container">
          <h1>Login to Access Course Recommendations</h1>
          <p>Please enter your details below:</p>
          <div className="login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required />

            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      ) : (
        <div id="course-container">
          <h1>Find Courses Based on Your Skills</h1>
          <p>Choose your skills to get personalized course recommendations!</p>
          <div className="skill-selection">
            <label htmlFor="skills">Select Your Skills:</label>
            <select id="skills" multiple onChange={handleSkillSelection}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="html-css">HTML & CSS</option>
              <option value="nodejs">Node.js</option>
              <option value="mongodb">MongoDB</option>
              <option value="react">React</option>
              {/* Add more options as needed */}
            </select>
            <button onClick={getRecommendations}>Get Recommendations</button>
          </div>
          <div id="recommendations" className="recommendations">
            {recommendations.length > 0 ? (
              recommendations.map((course, index) => (
                <div key={index}>
                  <h3>{course.title}</h3>
                  <a href={course.url} target="_blank" rel="noopener noreferrer">View Course</a>
                </div>
              ))
            ) : (
              <p>No recommendations yet. Select your skills and click 'Get Recommendations'.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


