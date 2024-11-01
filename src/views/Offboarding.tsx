import Logo from "@/assets/svg/Logo";
import Message from "@/assets/svg/Message";
import Rest from "@/assets/svg/Rest";
import Footer from "@/components/Footer";
import Button from "@/elements/Button";
import IconButton from "@/elements/IconButton";
import { useNavigate } from "react-router-dom";

const Offboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-8 px-4 text-center">
      <Logo />
      <h2 className="h2 mt-8">Už odcházíš?</h2>
      <p className="mt-8 mb-4">Chceš si dát pauzu nebo už končíš?</p>
      <Button
        title="Ještě mám chuť pracovat"
        onClick={() => navigate("/create-session")}
      />
      <p className="mt-8 mb-4">Líbí se ti moje aplikace a chceš mě podpořit?</p>
      <a
        href="https://buymeacoffee.com/petrazema"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton
          IconComponent={Rest}
          title="Kup mi kafe"
          isReversed={true}
        />
      </a>
      <p className="mt-8 mb-4">Máš pro mě zpětnou vazbu?</p>
      <a href="mailto:pzemanova.web@gmail.com" target="_blank" rel="noreferrer">
        <IconButton
          IconComponent={Message}
          title="Napiš mi"
          isReversed={true}
        />
      </a>
      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Offboarding;
