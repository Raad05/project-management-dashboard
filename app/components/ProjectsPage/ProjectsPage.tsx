"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Task = {
  name: string;
  assignedTo: string[];
  status: string;
  dueDate: string;
};

type Project = {
  name: string;
  description: string;
  tasks: Task[];
  members: string[];
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      setProjects(data);

      return data;
    } catch (e) {
      console.log("Error loading projects", e);
    }
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="projects-page">
      {data?.map((project: Project) => console.log(project.name))}
      <h1>Projects Page</h1>
    </div>
  );
};

export default ProjectsPage;
