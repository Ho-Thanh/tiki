import React from "react";
import { Footer, Header,SimpleSlider } from "../containers";

export const Layout = ({ children }) => {
  const listItem = [
    { title: "tất cả thịt rau củ", link: "" },
    { title: "rau củ quả", link: "" },
    {
      title: "thịt",
      link: "https://tiki.vn/rau-cu-qua/c44816?src=featured_keywords",
    },
    { title: "hàng đông lạnh", link: "" },
    { title: "trái cây", link: "" },
    { title: "hải sản", link: "" },
    { title: "gạo", link: "" },
  ];
  return (
    <div className="layout">
      <Header listItem={listItem} />
      {children}
      <Footer />
    </div>
  );
};
