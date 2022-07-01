import { useParams } from "react-router-dom";

export const Page1DetailA = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
