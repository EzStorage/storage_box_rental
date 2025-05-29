import { Outlet } from "react-router";
import Header from "../components/header";
import { StyledMainLayout } from "./main-layout.styles";

const MainLayout: React.FC = () => {
  return (
    <StyledMainLayout>
      <Header />
      <Outlet />
    </StyledMainLayout>
  );
};
export default MainLayout;
