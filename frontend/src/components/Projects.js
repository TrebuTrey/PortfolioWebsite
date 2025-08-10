import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <h2>Projects</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        {allTags.map(tag => (
          <motion.button
            key={tag}
            className={`filter-btn ${tag === activeTag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Accordion */}
      {filteredProjects.map(project => (
        <motion.div
          key={project.id}
          layout
          className="project-card"
          onClick={() =>
            setExpandedId(expandedId === project.id ? null : project.id)
          }
        >
          <motion.h3 layout>{project.name}</motion.h3>
          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div
                className="project-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p>{project.summary}</p>
                <div className="video-container">
                  <iframe
                    src={project.video}
                    title={project.name}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
