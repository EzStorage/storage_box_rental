import CardHero from "@pages/Homepage/components/CardHero";
import { DHeroContainer, HeroCardContainer, HeroTitleContainer } from "./Hero.styles";
import { useAppSelector } from "src/app/hooks";

export function DHero() {
    const user = useAppSelector(state => state.auth.user);

    return (
        <DHeroContainer>
            <div>
                <HeroTitleContainer>
                    <h1>Storage and Moving. Make it simple</h1>
                    <p>
                        Our flexible and convenient storage solutions in Singapore make it easy for
                        anyone to store and retrieve items anytime.
                    </p>
                </HeroTitleContainer>
                <HeroCardContainer isLogin={user !== null}>
                    <CardHero />
                </HeroCardContainer>
            </div>
        </DHeroContainer>
    );
}
