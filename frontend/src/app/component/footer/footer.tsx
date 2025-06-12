import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import React from "react";

export default function Footer() {
    return (
        <footer className="w-[100%] h-[150px] bg-maintykely laptop:h-[50px]">
            <div className="flex justify-between py-9 px-5 laptop:justify-between laptop:px-[10%] laptop:items-center laptop:py-[10px]">
                <div className="grid grid-cols-1 laptop:grid-cols-2">
                    <div>
                        <img src="../images/logo.png" alt="logo"/>
                    </div>
                    <div className=" text-neutral-500 grid grid-cols-1 laptop:grid-cols-2 mt-3 laptop:mt-0">
                        <div className="flex items-center ">
                            <AiOutlineCopyrightCircle className="text-[15px] mr-1"/> <p>2023 dot.cards text task. </p>
                        </div>
                        <div>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>

                <div className="flex cursor-pointer">
                    <div className="bg-neutral-600 w-[30px] h-[30px] rounded-2xl mr-5">
                        <BsInstagram className="text-white mt-[8px] ml-[8px]" />
                    </div>
                    <div className="bg-neutral-600 w-[30px] h-[30px] rounded-2xl mr-5">
                        <AiOutlineTwitter className="text-white mt-[8px] ml-[8px]" />
                    </div>
                    <div className="bg-neutral-600 w-[30px] h-[30px] rounded-2xl">
                        <AiFillYoutube className="text-white mt-[8px] ml-[8px]" />
                    </div>
                </div>
            </div>
        </footer>
    )
}