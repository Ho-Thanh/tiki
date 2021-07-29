import React, { useState } from "react";
import Atag from "./Atag";
import Icon from "./Icon";
import Link from "./Link";

const Block = ({ blocks }) => {
  const [imgs, setimgs] = useState([
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg",
    },
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg",
    },
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg",
    },
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg",
    },
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg",
    },
    {
      img: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg",
    },
  ]);
  const [links, setlinks] = useState([
    {
      a: "https://www.facebook.com/tiki.vn/",
      icon: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg",
    },
    {
      a: "https://www.youtube.com/user/TikiVBlog",
      icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png",
    },
  ]);
  const [apps, setapps] = useState([
    {
      a: "https://itunes.apple.com/vn/app/id958100553",
      icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png",
    },
    {
      a: "https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid",
      icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png",
    },
  ]);
  return (
    <div className="grid justify-around w-10/12 grid-cols-5 pt-5 m-auto ">
      {blocks.map((block) => (
        <div>
          <h4 className="text-sm font-medium" key={block.id}>
            {block.title}
          </h4>
          <Link childs={block.child} />
        </div>
      ))}
      <div>
        <h4 className="text-sm font-medium">PHƯƠNG THỨC THANH TOÁN</h4>
        <Icon icons={imgs} />
      </div>
      <div>
        <div>
          <h4 className="text-sm font-medium">KẾT NỐI CHÚNG TÔI</h4>
          <p className="">
            <Atag links={links} />
          </p>
        </div>
        <div>
          <h4 className="font-medium">TẢI ỨNG DỤNG TẠI ĐÂY </h4>
          <Atag links={apps} />
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-sm font-medium">KẾT NỐI CHÚNG TÔI</h4>
          <p className="">
            <Atag links={links} />
          </p>
        </div>
        <div>
          <h4 className="font-medium">TẢI ỨNG DỤNG TẠI ĐÂY </h4>
          <Atag links={apps} />
        </div>
      </div>
    </div>
  );
};

export default Block;
