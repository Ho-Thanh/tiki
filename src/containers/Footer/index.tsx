import { useState } from "react";


export const Footer = () => {
  const questions=[
        { text: "Các câu hỏi thường gặp", link: "https://hotro.tiki.vn" },
        { text: "Gửi yêu cầu hỗ trợ", link: "https://hotro.tiki.vn" },
        { text: "Hướng dẫn cài đặt", link: "https://hotro.tiki.vn" },
        { text: "Phương thức vận chuyển", link: "https://hotro.tiki.vn" },
      ]
    
    const details= [
        { text: "Giới thiệu Tiki", link: "" },
        { text: "Tuyển dụng", link: "" },
        { text: "Chính sách bảo mật thanh toán", link: "" },
      ]
    const contacts = [
        { text: "Giới thiệu Tiki", link: "" },
        { text: "Tuyển dụng", link: "" },
        { text: "Chính sách bảo mật thanh toán", link: "" },
      ]

    
    const wayPays = [
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
    ]
    const wayContacts =[
      {
        a: "https://www.facebook.com/tiki.vn/",
        icon: "https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg",
      },
      {
        a: "https://www.youtube.com/user/TikiVBlog",
        icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png",
      },
    ]
    const apps=[
      {
        a: "https://itunes.apple.com/vn/app/id958100553",
        icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png",
      },
      {
        a: "https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid",
        icon: "https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png",
      },
    ]
  
    
  return (
    <div className="col-span-12">
      <div className="grid justify-around w-10/12 pt-5 m-auto md:grid-cols-5 sm:grid-cols-1 ">
     
          <div>
            <h4 className="text-sm font-medium" >
              HỖ TRỢ KHÁCH HÀNG
            </h4>
            <div className='flex flex-col'>
              {questions.map((question,id)=>(
                  <a rel="noreferrer" href={question.link} className='my-2 text-xs' target="_blank" key={id}>{question.text}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium" >
              VỀ TIKI
            </h4>
            <div className='flex flex-col'>
              {details.map((detail,id)=>(
                  <a rel="noreferrer" href={detail.link} className='my-2 text-xs' target="_blank" key={id}>{detail.text}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium" >
              HỢP TÁC VÀ LIÊN KẾT
            </h4>
            <div className='flex flex-col'>
              {contacts.map((contact,id)=>(
                  <a rel="noreferrer" href={contact.link} className='my-2 text-xs' target="_blank" key={id}>{contact.text}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium" >
              PHƯƠNG THỨC THANH TOÁN
            </h4>
            <div className='grid w-10/12 grid-cols-3 justify-items-center'>
              {wayPays.map((icon)=>(
                  <img src={icon.img} className='w-10 h-10 '/>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium" >
              KẾT NỐI CHÚNG TÔI
            </h4>
            <div className='grid grid-cols-2 py-3 '>
                {wayContacts.map((link)=>(
                    <a href= {link.a} >
                        <img src={link.icon}  />
                    </a>
                ))}
            </div>
            <h4 className="text-sm font-medium" >
              TẢI ỨNG DỤNG TẠI ĐÂY
            </h4>
            <div className='grid grid-cols-2 py-3 justify-items-around'>
                {apps.map((app)=>(
                    <a href= {app.a} >
                        <img src={app.icon}  />
                    </a>
                ))}
            </div>
          </div>
          
      </div>
    </div>
    
  );
};
