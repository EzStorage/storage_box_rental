import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { HeroContainer, HeroIntro, HeroLeft } from "../Homepage.styles";
import CardHero from "../CardHero";
import { useAppSelector } from "src/app/hooks";
import SummaryCards from "src/components/SummaryCards";

const Hero: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const user = useAppSelector(state => state.auth.user);
    const isLogin = user !== null;

    return (
        <HeroContainer isLogin={isLogin} isMobile={isMobile}>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 0, lg: "64px" }}
            >
                <Grid container size={{ xs: 12, lg: 6 }} sx={{ mb: { xs: "24px", lg: 0 } }}>
                    {isLogin && isMobile ? (
                        <HeroIntro>
                            <div className="name">Welcome {user.name}!</div>
                            <div className="subtitle">
                                Subtitle goes here, Lorem ipsum dolor sit amet consectetur.
                            </div>
                            <div>
                                <SummaryCards />
                            </div>
                        </HeroIntro>
                    ) : (
                        <HeroLeft spacing={"16px"}>
                            <h1>Storage and Moving. Make it simple</h1>
                            <p>
                                Our flexible and convenient storage solutions in Singapore make it
                                easy for anyone to store and retrieve items anytime.
                            </p>
                        </HeroLeft>
                    )}
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box
                        sx={{
                            maxWidth: 480,
                            width: "100%",
                            mx: "auto",
                        }}
                    >
                        <CardHero />
                    </Box>
                </Grid>
            </Grid>
        </HeroContainer>
    );
};
export default Hero;
