"use client";

import React from "react";
import Image from "next/image";

interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  content,
  imageSrc,
  className,
  imageAlt = "Info Image",
  imagePosition = "left",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-12 ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} ${className}`}
    >
      <div
        className={`flex w-full flex-col gap-3 px-4 text-left sm:px-6 md:px-12 lg:px-16`}
      >
        {/* Icon with 2 circle bg */}
        <div className="flex items-center justify-start">
          <div className="flex items-center justify-center rounded-full bg-purple-100 p-2">
            <div className="flex items-center justify-center rounded-full bg-violet-200 p-1">
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
        </div>

        <h3 className="text-2xl font-normal">{title}</h3>
        <p className="font-light text-gray-600">{content}</p>
      </div>

      <div className="w-full flex-shrink-0 px-2 sm:px-6 md:w-[550px] md:px-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
          className="h-auto w-full rounded-lg object-cover"
          placeholder="blur"
          blurDataURL={imageSrc}
        />
      </div>
    </div>
  );
};

export default InfoCard;
