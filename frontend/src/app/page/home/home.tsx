"use client"

import React, { useEffect, useState } from "react"
import Bouton from "../../component/bouton/bouton";
import { AiOutlineArrowRight } from "react-icons/ai";
import Head from "../../component/head/head";
import Footer from "../../component/footer/footer";

export default function Home() {
    return (
        <div>
            {/* Tete du page */}
            <Head />

            {/* Pub 25% */}
            <div className="bg-manga grid grid-cols-1 w-[90%] h-[500px] rounded-3xl mt-[4%] ml-[5%] laptop:grid-cols-2 laptop:h-[350px] laptop:w-[80%] laptop:px-[20%] laptop:ml-[10%] laptop:mt-[2%] laptop:items-center">
                <div className="mt-[8%] order-1 laptop:order-2 laptop:mt-[-4%] laptop:w-[130%]">
                    <img src="../images/sary5.png" alt="nike" className="w-[55%] ml-[25%] laptop:w-[400px]" />
                </div>
                <div className="text-center mt-[-5%] order-2 laptop:order-1 laptop:text-left laptop:ml-[-80%]">
                    <p className="text-orange-600 font-bold text-[38px]">25% OFF</p>
                    <p className="font-bold text-[45px]">Summer Sale</p>
                    <p className="text-gray-400 py-5 mb-2">Discover our summer styles with discount</p>
                    <Bouton label="Shop now" icons={<AiOutlineArrowRight className="ml-2 mt-[2px]" />} />
                </div>
            </div>

            {/* types de produits */}
            <div className="px-8 py-12">
                <p className="font-bold text-[28px] laptop:ml-[8%]">Explore our latest drops</p>

                <div className="flex">
                    <div className="w-[80%]">
                        <div className="w-[80%] h-[250px] bg-zinc-100 rounded-3xl mt-[8%]">
                            <img src="" alt="off-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pied du page */}
            <Footer/>
        </div>
    )
}