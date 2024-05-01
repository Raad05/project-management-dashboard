import { create } from "zustand";
import { Project } from "../components/ProjectsPage/ProjectsPage";

export const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set(() => ({ projects })),
  deleteProject: (projectId: string) =>
    set((state: any) => ({
      projects: state.projects.filter(
        (project: Project) => project.id !== projectId
      ),
    })),
}));
