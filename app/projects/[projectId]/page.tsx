const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  return <div className="product-details">{params.projectId}</div>;
};

export default ProjectDetails;
