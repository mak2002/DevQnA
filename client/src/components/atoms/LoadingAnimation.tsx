import { FallingLines } from "react-loader-spinner";

export const LoadingAnimation = ({ className }: any) => {
  return (
    <div className={className}>
      <FallingLines color="#CE9803" width="150" visible={true} />
    </div>
  );
};
