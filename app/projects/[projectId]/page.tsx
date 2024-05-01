const ProductDetails = ({ params }: { params: { projectId: string } }) => {
  return <div>{params.projectId}</div>;
};

export default ProductDetails;
