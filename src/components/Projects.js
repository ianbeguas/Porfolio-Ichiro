import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Project Section</h2>

      {/* Project 1 */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:mr-4">
          <img
            src="https://lirp.cdn-website.com/078977fd/dms3rep/multi/opt/2024-trax-masthead-01-2880w.jpg"
            alt="Project 1"
            className="w-full h-auto rounded-lg md:rounded-none md:w-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h3 className="text-xl font-bold mb-2">Project 1 Title</h3>
          <p className="text-gray-700">Project 1 description goes here.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2 md:mr-4">
          <img
            src="https://www.nissanusa.com/content/dam/Nissan/us/vehicles/kicks/2024/overview/2024-nissan-kicks-orange.jpg"
            alt="Project 2"
            className="w-full h-auto rounded-lg md:rounded-none md:w-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-4">
          <h3 className="text-xl font-bold mb-2">Project 2 Title</h3>
          <p className="text-gray-700">Project 2 description goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
