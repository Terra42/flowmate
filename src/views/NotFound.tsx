import Button from "@/elements/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-8">404</h1>
      <p className="text-xl mb-16">Tady není nic k vidění </p>
      <Button title="Zkusím štěstí jinde" onClick={() => navigate('/')} />
    </div>
  );
};  

export default NotFound;