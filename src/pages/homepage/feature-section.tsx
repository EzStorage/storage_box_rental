import { Grid, Stack } from "@mui/material";
import {
  FeatureSectionContainer,
  FeatureSectionHeader,
  FeatureSectionItem,
} from "./homepage.styles";
import iconPlans from "../../assets/icon-feature-plans.png";
import iconLifting from "../../assets/icon-feature-lifting.png";
import iconReturns from "../../assets/icon-feature-returns.png";
import slideShow1 from "../../assets/slideshow-1.png";
import slideShow2 from "../../assets/slideshow-2.png";
import slideShow3 from "../../assets/slideshow-3.png";
import slideShow4 from "../../assets/slideshow-4.png";
import Slideshow from "../../components/slideshow/slideshow";

const features = [
  {
    icon: iconPlans,
    title: "Flexible Storage Plans",
    description: "Store for as short as one month or as long as you need",
  },
  {
    icon: iconLifting,
    title: "No Heavy Lifting And Hauling",
    description: "We handle the pickup and transport—just pack your items, and we’ll do the rest",
  },
  {
    icon: iconReturns,
    title: "On-Demand Returns",
    description: "Need something back? Request a return anytime, and we’ll deliver it to your door",
  },
];

const slideshowSlides = [
  {
    image: slideShow1,
    alt: "Slideshow Image 1",
  },
  {
    image: slideShow2,
    alt: "Slideshow Image 2",
  },
  {
    image: slideShow3,
    alt: "Slideshow Image 3",
  },
  {
    image: slideShow4,
    alt: "Slideshow Image 4",
  },
];

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
          {features.map(feature => (
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
      <Slideshow slides={slideshowSlides} />
    </FeatureSectionContainer>
  );
};
export default FeatureSection;
