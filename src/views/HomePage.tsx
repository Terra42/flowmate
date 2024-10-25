import { WordRotate } from "@/elements/WordRotate";
import Logo from "@/assets/svg/Logo";
import Button from "@/elements/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-8 px-4 text-center">
      <Logo />
      <h1 className="uppercase text-4xl font-bold mt-8">Flowmate</h1>
      <div className="flex items-center justify-center w-full mt-8">
        <h2 className="h2">Můj virtuální</h2>
        <WordRotate
          words={["parťák", "kolega", "společník", "kamarád"]}
          className="h2 ml-2 text-accent w-32"
        />
      </div>
      <p className="mt-8">
        Vytvoř si pracovní blok, prozraď mi na čem chceš pracovat a zvol si takové prostředí, které tě dostane do flow.
      </p>
      <div className=" mt-10">
        <Button title="Zkusím to" onClick={() => navigate("/create-session")} />
      </div>
    </div>
  );
};

export default HomePage;
