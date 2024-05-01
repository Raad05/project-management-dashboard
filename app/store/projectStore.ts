import { create } from "zustand";
import { Project } from "../components/ProjectsPage/ProjectsPage";

export const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (projects: Project[]) => set(() => ({ projects })),
}));
