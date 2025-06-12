import { MdOutlineShoppingBasket } from "react-icons/md";
import React from "react";
import { Badge } from 'antd';

export default function Head(){
    return(
        <header className="cursor-pointer">
            <div className="mt-5 justify-between px-5 flex items-center laptop:justify-between laptop:px-[10%]">
                <div>
                    <img src="../images/logo.png" alt="logo" />
                </div>
                <div className="flex border-2 border-black rounded-lg w-[160px] h-[40px] items-center">
                    <MdOutlineShoppingBasket className="ml-[14px] mr-2"/> 
                    <p className="font-bold">View Cart</p>
                    <Badge count={1} className="ml-2"/>
                </div>
            </div>
            <hr className="w-[100%] mt-5 laptop:w-full"/>
        </header>
    )
}