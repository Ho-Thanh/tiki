import React, { useState } from "react";
import { Item } from "../";
export const Header = () => {
  const [items, setItems] = useState([
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
  ]);
  const [searchValueState, setSearchValueState] = useState<string>();
  return (
    <div className="col-span-12 bg-blue-500">
      <div className="items-center w-10/12 m-auto">
        <div className="flex col-span-1 justify-items-center">
          <div className="p-4">
            <img
              src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
              alt="logo Tiki"
              className="h-10 col-span-1 w-14 justify-items-center"
            />
          </div>
          <a className="flex items-center">
            <img
              className="w-10 h-10 m-2"
              src="https://salt.tikicdn.com/ts/upload/96/d1/77/e499ea39b0773a337d2217ad473fcb97.png"
            />
            <div className="flex flex-col text-white ">
              <span>Danh Mục</span>
              <span className="flex">
                Sản Phẩm
                <img
                  src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                  className="w-8 h-7"
                ></img>
              </span>
            </div>
          </a>
          <div className="flex w-6/12 mx-4 my-5">
            <input
              data-view-id="main_search_form_input"
              type="text"
              placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              className="w-10/12 h-10 rounded-l-md"
              onChange={(e) => {
                setSearchValueState(e.target.value);
              }}
            />
            <button
              data-view-id="main_search_form_button"
              className="flex h-10 text-white bg-blue-900 w-36 place-items-center rounded-r-md"
            >
              <img
                className="h-8 mx-2 "
                src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png"
              />
              Tìm Kiếm
            </button>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <img
                className="w-8 h-8 mx-4"
                src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
              />
            </div>
            <span className="flex flex-col justify-center text-white w-35">
              <span>Đăng Nhập/ Đăng Kí</span>
              <span className="flex">
                <span>Tài Khoản</span>
                <img
                  className="w-6 h-6"
                  src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
                ></img>
              </span>
            </span>
            <div className="flex items-center w-40 mx-5 ">
              <div className="relative flex items-center mx-4">
                <img
                  className="w-10 h-10"
                  src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                />
                <span className="absolute -top-2.5 -right-1.5 bg-yellow-300 rounded-full h-6 w-6 text-center">
                  0
                </span>
              </div>
              <span className="relative text-white -bottom-1.5">Giỏ Hàng</span>
            </div>
          </div>
        </div>
        <div className="flex pb-4 justify-items-center">
          <a href="#">
            <img
              src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
              alt="free-ship"
              className="h-4 w-22"
            />
          </a>
          <div className="flex ml-32 justify-items-center">
            <Item items={items} />
          </div>
          <a className="absolute flex px-3 bg-blue-200 rounded-md right-40">
            <img
              className="mx-2"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
            />
            <span className="text-white">Bán hàng cùng Tiki</span>
          </a>
        </div>
      </div>
    </div>
  );
};
