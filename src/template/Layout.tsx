import React from "react";
import { Footer, Header,SimpleSlider } from "../containers";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
