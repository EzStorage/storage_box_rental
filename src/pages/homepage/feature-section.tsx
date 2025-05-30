import { Grid, Stack } from "@mui/material";
import {
  FeatureSectionContainer,
  FeatureSectionHeader,
  FeatureSectionItem,
} from "./homepage.styles";
import Slideshow from "../../components/slideshow/slideshow";
import { FEATURES, SLIDESHOW } from "../../constants/homepage.constants";

const FeatureSection: React.FC = () => {
  return (
    <FeatureSectionContainer>
      <Grid
        container
        spacing={"32px"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <FeatureSectionHeader size={{ xs: 12, lg: 6 }}>
          <h1>
            A smarter, more
            <br />
            <span>affordable</span> way to store
          </h1>
          <p>
            Secure, flexible storage with hassle-free pickup and delivery—at prices that fit your
            budget
          </p>
        </FeatureSectionHeader>

        <Grid size={{ xs: 12, lg: 6 }} container>
          {FEATURES.map(feature => (
            <Stack key={feature.title} spacing={12}>
              <FeatureSectionItem>
                <img src={feature.icon} alt={feature.title} />
                <div>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </FeatureSectionItem>
            </Stack>
          ))}
        </Grid>
      </Grid>
      <Slideshow slides={SLIDESHOW} />
    </FeatureSectionContainer>
  );
};
export default FeatureSection;
