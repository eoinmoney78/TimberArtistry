import React, { useState, useEffect } from 'react';
import './project.css';
import { Link } from 'react-router-dom';
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const mockProjectsData = [
        // ... (same mock data as before)
    ];

    setProjects(mockProjectsData);
  }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-title">Cabinet re-facing</h2>
      
      {/* Cabinet Re-facing Explanation */}
      <div className="refacing-explanation">
        <h3 className="refacing-title">Understanding Cabinet Re-facing</h3>
        <p className="refacing-description">
          Cabinet re-facing involves replacing the door and drawer fronts of your existing cabinets and applying a new veneer over the cabinet boxes' exterior. In other words, instead of tearing out the entire cabinet, you're just updating the outer "face" of it. Hardware, like handles and knobs, can also be replaced to complement the new look.
        </p>
        <h4 className="advantages-title">Advantages of Cabinet Re-facing:</h4>
        <ul className="advantages-list">
          <li className="advantage-item">Cost-Efficient: Re-facing can save you up to 50% compared to the expense of completely replacing the cabinets.</li>
          <li className="advantage-item">Less Disruptive: Kitchens remain functional during most of the re-facing process.</li>
          <li className="advantage-item">Environmentally Friendly: Reduces waste by reusing existing cabinets.</li>
          <li className="advantage-item">Versatility in Design: Update the style, color, or wood type without changing the entire layout.</li>
          <li className="advantage-item">Increases Home Value: An updated kitchen can appeal to potential buyers.</li>
          <li className="advantage-item">Maintains Cabinet Integrity: Keep the structure while giving them a facelift.</li>
        </ul>
        <p className="conclusion-text">
          In conclusion, cabinet re-facing is an efficient way to achieve a new look without the costs, time, and hassle of a complete renovation. It's perfect for those with structurally sound cabinets that need an aesthetic boost.
        </p>
        <div className="cta-container">
        <h3 className="cta-title">Ready to Transform Your Kitchen?</h3>
        <p className="cta-description">Get in touch with us to explore the best options for your space!</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
      </div>

      {/* Projects List */}
      <ul className="project-list">
        {projects.map(project => (
          <li key={project.id} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
