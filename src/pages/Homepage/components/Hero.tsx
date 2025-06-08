// src/components/homepage/Hero.tsx

import { Box, Grid } from "@mui/material";
import { HeroContainer, HeroLeft } from "../Homepage.styles";
import CardHero from "./CardHero";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 0, lg: "64px" }}
      >
        <Grid>
          <HeroLeft spacing={"16px"}>
            <h1>Storage and Moving. Make it simple</h1>
            <p>
              Our flexible and convenient storage solutions in Singapore make it easy for
              anyone to store and retrieve items anytime.
            </p>
          </HeroLeft>
        </Grid>

        <Grid>
          <Box sx={{ maxWidth: 480, width: "100%", mx: "auto" }}>
            <CardHero />
          </Box>
        </Grid>
      </Grid>
    </HeroContainer>
  );
};

export default Hero;
