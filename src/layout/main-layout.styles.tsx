import styled from "@emotion/styled";

export const StyledMainLayout = styled("div")(({ theme }) => ({
  padding: "0 80px",
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    padding: "0 16px",
  },
}));
