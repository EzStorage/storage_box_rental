import ProcessFlow from "@components/ProcessFlow";
import { STEPS } from "../constants";
import { HowItWorksContainer, HowItWorksHeader } from "../Homepage.styles";

const HowItWorks: React.FC = () => {
    return (
        <HowItWorksContainer>
            <HowItWorksHeader>
                <h1>
                    How it <span>works</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique
                </p>
            </HowItWorksHeader>
            <ProcessFlow steps={STEPS} />
        </HowItWorksContainer>
    );
};
export default HowItWorks;
