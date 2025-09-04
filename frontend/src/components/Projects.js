import React, { useState } from "react";
import { motion } from "framer-motion";
import { AccordionSection } from "./AccordionSection.js";
import "./Projects.css";
import { projectsData } from "../data/data";


const allTags = ["All", ...new Set(projectsData.flatMap(p => p.tags))];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? projectsData
      : projectsData.filter(p => p.tags.includes(activeTag));

  return (
    <div className="projects-section">
      {/* Filter Bar */}
      <div className="filter-bar">
        {allTags.map(tag => (
          <motion.button
            key={tag}
            className={`filter-btn ${tag === activeTag ? "active" : ""}`}
            onClick={() => {
              setActiveTag(tag);
              setExpandedId(null); // close any open accordion when filter changes
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {filteredProjects.map(project => (
        <motion.div
          key={project.id}
          layout
          className="project-card"
        >
          {/* Accordion Header (clickable) */}
          <div
            className="project-header"
            onClick={() =>
              setExpandedId(expandedId === project.id ? null : project.id)
            }
          >
            <motion.h3 layout>
              {project.name}{" "}
            </motion.h3>
            <span className={`arrow ${expandedId === project.id ? "open" : ""}`}>
              &#9660;
            </span>
            
          </div>

          <AccordionSection isOpen={expandedId === project.id}>
            <p>{project.summary}</p>
            <div className="media-container">
              {project.media.endsWith(".jpg") || project.media.endsWith(".png") ? (
                <img src={project.media} alt={project.name} />
              ) : (
                <iframe
                  src={project.media}
                  title={project.name}
                  frameBorder="0"
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </AccordionSection>
        </motion.div>
      ))}
    </div>
  );
}
