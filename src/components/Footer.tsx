import { getCurrentYear } from "@/utils/year";

const Footer = () => {
  return (
    <div className="bg-bg-semi rounded-lg px-4 py-3 w-full text-center">
      <p className="text-sm">
        Vytvořila{" "}
        <a href="www.linkedin.com/in/petra-zemanová-090115170" className="text-accent">
          Petra Zemanová
        </a>
        , {getCurrentYear}
      </p>
    </div>
  );
};

export default Footer;
