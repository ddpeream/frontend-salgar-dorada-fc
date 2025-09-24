import { Outlet } from "react-router-dom";
import { Header } from "../../pages/home/component/header/header";
import { Footer } from "../../pages/home/component/footer/footer";
import { LayoutContainer, LayoutContent } from "./app-layout.styled";

export const AppLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
      <Footer />
    </LayoutContainer>
  );
};

export default AppLayout;
