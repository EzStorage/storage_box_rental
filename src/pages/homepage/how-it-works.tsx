import ProcessFlow from "../../components/timeline";
import howItWorks1 from "../../assets/how-it-works-1.png";
import howItWorks2 from "../../assets/how-it-works-2.png";
import howItWorks3 from "../../assets/how-it-works-3.png";
import howItWorks4 from "../../assets/how-it-works-4.png";
import howItWorks5 from "../../assets/how-it-works-5.png";
import { HowItWorksContainer, HowItWorksHeader } from "./homepage.styles";

const steps = [
  {
    number: "01",
    image: howItWorks1,
    title: "Order Online",
    description: "Choose your storage plan and book your boxes in just a few clicks",
  },
  {
    number: "02",
    image: howItWorks2,
    title: "We Deliver the Box",
    description: "We'll drop off the storage boxes at your doorstep—no heavy lifting required",
    color: "from-red-600 to-red-700",
  },
  {
    number: "03",
    image: howItWorks3,
    title: "We Pick-up",
    description:
      "Pack your items, and our team will collect the boxes and transport them to our secure facility",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "04",
    image: howItWorks4,
    title: "Secure Storage",
    description: "Your items are stored safely in our local facility, ready whenever you need them",
  },
  {
    number: "05",
    image: howItWorks5,
    title: "Easy Returns",
    description:
      "We'll return your items when your booking ends or request a return anytime before",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer>
      <HowItWorksHeader>
        <h1>
          How it <span>works</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique
        </p>
      </HowItWorksHeader>
      <ProcessFlow steps={steps} />
    </HowItWorksContainer>
  );
};
export default HowItWorks;
