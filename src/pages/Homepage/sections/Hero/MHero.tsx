import CardHero from "@pages/Homepage/components/CardHero";
import { HeroCardContainer, HeroIntro, HeroTitleContainer, MHeroContainer } from "./Hero.styles";
import { useAppSelector } from "src/app/hooks";
import SummaryCards from "@components/SummaryCards";

export function MHero() {
    const user = useAppSelector(state => state.auth.user);
    const isLogin = user !== null;

    return (
        <MHeroContainer isLogin={isLogin}>
            {isLogin ? (
                <HeroIntro>
                    <div>Welcome {user.name}!</div>
                    <div>Subtitle goes here, Lorem ipsum dolor sit amet consectetur.</div>
                    <div>
                        <SummaryCards />
                    </div>
                </HeroIntro>
            ) : (
                <HeroTitleContainer>
                    <h1>Storage and Moving. Make it simple</h1>
                    <p>
                        Our flexible and convenient storage solutions in Singapore make it easy for
                        anyone to store and retrieve items anytime.
                    </p>
                </HeroTitleContainer>
            )}
            <HeroCardContainer isLogin={isLogin}>
                <CardHero />
            </HeroCardContainer>
        </MHeroContainer>
    );
}
