import { useState } from "react";
import Block from "./Block";

export const Footer = () => {
  const [blocks, setblocks] = useState([
    {
      title: "HỖ TRỢ KHÁCH HÀNG",
      child: [
        { text: "Các câu hỏi thường gặp", link: "https://hotro.tiki.vn" },
        { text: "Gửi yêu cầu hỗ trợ", link: "https://hotro.tiki.vn" },
        { text: "Hướng dẫn cài đặt", link: "https://hotro.tiki.vn" },
        { text: "Phương thức vận chuyển", link: "https://hotro.tiki.vn" },
      ],
    },
    {
      title: "VỀ TIKI",
      child: [
        { text: "Giới thiệu Tiki", link: "" },
        { text: "Tuyển dụng", link: "" },
        { text: "Chính sách bảo mật thanh toán", link: "" },
      ],
    },
    {
      title: "HỢP TÁC VÀ LIÊN KẾT",
      child: [
        { text: "Giới thiệu Tiki", link: "" },
        { text: "Tuyển dụng", link: "" },
        { text: "Chính sách bảo mật thanh toán", link: "" },
      ],
    },
  ]);
  return (
    <div className="col-span-12">
      <Block blocks={blocks} />
    </div>
  );
};
