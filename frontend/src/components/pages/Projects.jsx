import React, { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // This is where you'd normally fetch your projects from an API
    // Here's a mock data for demonstration purposes
    const mockProjectsData = [
      
        { id: 1, title: 'Maple Magic', description: 'Elegant re-facing using high-quality maple wood, transforming an outdated kitchen into a modern paradise.' },
        { id: 2, title: 'Cherry Charm', description: 'Refined cherry wood re-facing, giving a luxurious touch to classic kitchen cabinets.' },
        { id: 3, title: 'Oak Oasis', description: 'Re-facing using sturdy oak, perfect for those looking for a blend of durability and aesthetic appeal.' },
        { id: 4, title: 'Walnut Wonder', description: 'Sophisticated walnut wood re-facing, ideal for introducing a rich, deep tone to your kitchen space.' },
        { id: 5, title: 'Pine Perfection', description: 'Transform your kitchen with the light and versatile tones of pine wood re-facing.' },
        { id: 6, title: 'Birch Beauty', description: 'Experience the smooth finish of birch wood as we breathe new life into tired cabinets with our expert re-facing techniques.' }
      
      
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
