import React, { useState } from "react"
import Icon from "./Icon"
import Link from "./Link"

const Block = ({blocks}) => {
    const [imgs, setimgs] = useState([
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg'},
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg'},
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg'},
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg'},
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg'},
        {img:'https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg'}
    ])
    return (
        <div className='flex justify-around w-10/12 pt-5 m-auto '>
            {blocks.map((block)=>(
                <div>
                    <h4 className='font-medium' key={block.id}>{block.title}</h4>
                    <Link childs = {block.child}/>
                </div>
                
            ))}
            <div>
                <h4 className='font-medium'>
                PHƯƠNG THỨC THANH TOÁN

                </h4>
                <Icon icons = {imgs}/>
            </div>
           <div>
                <div>
                    <h4 className='font-medium'>KẾT NỐI CHÚNG TÔI</h4>
                      
                </div>   
                <div>
                    <h4 className='font-medium'>TẢI ỨNG DỤNG TẠI ĐÂY </h4>
                </div>
            </div>
        </div>
    )
}

export default Block
