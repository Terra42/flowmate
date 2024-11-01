import { WordRotate } from "@/elements/WordRotate";
import Logo from "@/assets/svg/Logo";
import Button from "@/elements/Button";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative flex flex-col items-center py-8 px-4 text-center  md:py-14 lg:py-0 lg:h-screen lg:justify-center">
      <Logo />
      <h1 className="uppercase text-4xl font-bold mt-8 md:text-5xl lg:mt-12 lg:text-8xl">Flow Mate</h1>
      <div className="flex items-center justify-center w-full mt-8 lg:mt-12">
        <h2 className="h2">Můj virtuální</h2>
        <WordRotate
          words={["parťák", "kolega", "společník", "kamarád"]}
          className="h2 ml-2 text-accent w-32 md:w-40 lg:w-48"
        />
      </div>
      <p className="mt-8 w-10/12 sm:w-3/4 md:text-lg lg:w-2/5 lg:text-xl lg:mt-16">
        Vytvoř si pracovní blok, prozraď mi na čem chceš pracovat a zvol si takové prostředí, které tě dostane do flow.
      </p>
      <div className=" mt-10 md:mt-16">
        <Button title="Zkusím to" onClick={() => navigate("/create-session")} />
      </div>
      <div className="absolute bottom-8 w-10/12">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
