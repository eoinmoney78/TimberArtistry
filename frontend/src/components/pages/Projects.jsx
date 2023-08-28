import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // This is where you'd normally fetch your projects from an API
    // Here's a mock data for demonstration purposes
    const mockProjectsData = [
      { id: 1, title: 'Project A', description: 'Description for Project A' },
      { id: 2, title: 'Project B', description: 'Description for Project B' },
      { id: 3, title: 'Project C', description: 'Description for Project C' },
    ];

    setProjects(mockProjectsData);
  }, []);  // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
