"use client";

import React from "react";

export default function Bouton({ label, icons }) {
  return (
    <div>
      <button className="bg-maintykely w-[350px] h-[50px] rounded-md text-white hover:bg-neutral-800 transition laptop:w-[250px]">
        <div className="flex justify-center items-center">
          <p className="font-bold">{label}</p>
          {icons}
        </div>
      </button>
    </div>
  );
}