import { useScreenSize } from "@hooks/useScreenSize";
import { MHero } from "./MHero";
import { DHero } from "./DHero";

export default function Hero() {
    const { isDesktop } = useScreenSize();
    return isDesktop ? <DHero /> : <MHero />;
}
