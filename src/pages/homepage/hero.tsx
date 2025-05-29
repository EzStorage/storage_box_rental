import { Grid } from "@mui/material";
import { HeroContainer, HeroLeft } from "./homepage.styles";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Grid container columnSpacing={{ lg: 20 }} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 12, lg: 6 }} sx={{ mb: { xs: "24px", lg: 0 } }}>
          <HeroLeft>
            <h1>Storage and Moving. Make it simple</h1>
            <p>
              Our flexible and convenient storage solutions in Singapore make it easy for anyone to
              store and retrieve items anytime.
            </p>
          </HeroLeft>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}></Grid>
      </Grid>
    </HeroContainer>
  );
};
export default Hero;
