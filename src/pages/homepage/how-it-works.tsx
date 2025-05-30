import ProcessFlow from "../../components/process-flow";
import { STEPS } from "../../constants/homepage.constants";
import { HowItWorksContainer, HowItWorksHeader } from "./homepage.styles";

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
      <ProcessFlow steps={STEPS} />
    </HowItWorksContainer>
  );
};
export default HowItWorks;
