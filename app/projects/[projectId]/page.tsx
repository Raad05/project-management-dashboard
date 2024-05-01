"use client";

import { Project } from "@/app/components/ProjectsPage/ProjectsPage";
import { useProjectStore } from "@/app/store/projectStore";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const { projects } = useProjectStore((state: any) => ({
    projects: state.projects,
  }));

  const projectById = projects.find(
    (project: Project) => project.id === params.projectId
  );

  return (
    <div className="product-details">
      <p>{projectById.name}</p>
    </div>
  );
};

export default ProjectDetails;
