"use client";

import { useProjectStore } from "@/app/store/projectStore";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "antd";
import Link from "next/link";

export type Task = {
  name: string;
  assignedTo: string[];
  status: string;
  dueDate: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  members: string[];
};

const ProjectsPage = () => {
  const { projects, setProjects } = useProjectStore((state: any) => ({
    projects: state.projects,
    setProjects: state.setProjects,
  }));

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
      <h1 className="text-center text-3xl font-bold my-10">Projects</h1>
      <div className="grid grid-cols-3 gap-5">
        {projects?.map((project: Project, idx: number) => (
          <Card key={idx} title={`${project.name}`} bordered={false}>
            <p>{project.description}</p>
            <div className="flex justify-around">
              <Link href={`/projects/${project.id}`}>
                <Button className="font-bold">View</Button>
              </Link>
              <span>
                <EditOutlined className="mx-2" />
                <DeleteOutlined className="mx-2" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
