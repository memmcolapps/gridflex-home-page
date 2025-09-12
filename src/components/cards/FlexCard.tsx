"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  content: string;
}

const FlexCard: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white px-4 py-6 text-left shadow-lg">
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-center rounded-xl bg-[var(--primary)] p-3">
          <Image
            src={icon}
            alt="icon"
            width={28}
            height={28}
            className="h-5 w-5"
            placeholder="blur"
            blurDataURL={icon}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-normal">{title}</h3>
        <p className="text-sm font-light text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default FlexCard;
