import styled from "@emotion/styled";

export const StyledMainLayout = styled("div")(({ theme }) => ({
  padding: "0 80px",

  [theme.breakpoints.down("md")]: {
    padding: "0 16px",
  },
}));
