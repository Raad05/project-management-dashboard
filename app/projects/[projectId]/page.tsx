"use client";

import { Project, Task } from "@/app/components/ProjectsPage/ProjectsPage";
import { useProjectStore } from "@/app/store/projectStore";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Layout, Modal, theme } from "antd";
import { Divider, List, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Content } = Layout;

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [newMember, setNewMember] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { projects } = useProjectStore((state: any) => ({
    projects: state.projects,
    deleteProject: state.deleteProject,
  }));

  const projectById = projects.find(
    (project: Project) => project.id === params.projectId
  );

  const members = projectById.members;

  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <h3 className="my-10 font-bold text-3xl">Project Details</h3>
        <div className="flex justify-between mx-20 my-5">
          <div className="mx-3 rounded w-1/5 p-2">
            <Divider orientation="left">
              <div className="flex items-center">
                <p className="font-bold text-lg mx-5">Team Members</p>
                <UserAddOutlined className="text-lg border border-gray-200 p-2 rounded"></UserAddOutlined>
              </div>
            </Divider>
            <List
              bordered
              dataSource={members}
              renderItem={(item: string) => (
                <List.Item>
                  <Typography.Text className="text-lg"></Typography.Text>
                  {item}
                </List.Item>
              )}
            />
          </div>
          <div className="border border-gray-100 mx-3 rounded w-4/5 p-2 text-lg">
            <div className="flex justify-between">
              <p className="font-bold">{projectById.name}</p>
              <EditOutlined
                onClick={showModal}
                className="mx-2 text-2xl"
              ></EditOutlined>
            </div>
            <p className="my-5">{projectById.description}</p>
          </div>
        </div>
        <div className="flex justify-between mx-20">
          <div className="mx-3 rounded w-1/5 p-2">
            <Divider orientation="left">
              <p className="font-bold text-lg mx-5">Recent Activities</p>
            </Divider>
          </div>
          <div className="mx-3 rounded w-4/5 p-2 text-lg">
            <p className="font-bold text-center">Tasks</p>
            <div className="grid grid-cols-3">
              <ul>
                <p className="font-bold text-center">Name</p>
                {projectById.tasks.map((task: Task, idx: number) => (
                  <li className="list-disc" key={idx}>
                    {task.name}
                  </li>
                ))}
              </ul>
              <ul>
                <p className="font-bold text-center">Assigned To</p>
                {projectById.tasks.map((task: Task, idx: number) => (
                  <li className="list-disc" key={idx}>
                    {task.assignedTo.map((member, idx) =>
                      idx === task.assignedTo.length - 1 ? (
                        <span key={idx}>{member}</span>
                      ) : (
                        <span key={idx}>{member}, </span>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Content>
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex justify-around items-center my-5">
          <p className="text-lg">Add Task</p>
          <input
            className="border border-gray-300 rounded"
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            type="text"
          />
          <Button onClick={() => console.log(newTask)}>Add</Button>
        </div>
        <div className="flex justify-around items-center my-5">
          <p className="text-lg">Assign New Member</p>
          <input
            className="border border-gray-300 rounded"
            onChange={(e) => {
              setNewMember(e.target.value);
            }}
            type="text"
          />
          <Button onClick={() => console.log(newMember)}>Assign</Button>
        </div>
      </Modal>
    </Layout>
  );
};

export default ProjectDetails;
