import React from "react";
import { Header } from "./component/header";
import { Footer } from "./component/footer";

export const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
};
