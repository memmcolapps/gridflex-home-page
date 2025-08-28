'use client';

import React from 'react';
import Image from 'next/image';

interface InfoCardProps {
    icon: string;
    title: string;
    content: string;
    imageSrc: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
    icon,
    title,
    content,
    imageSrc,
    className,
    imageAlt = 'Info Image',
    imagePosition = 'left',
}) => {
    const isImageLeft = imagePosition === 'left';

    return (
        <div
            className={`flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-12 
            ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${className}`}
        >
            <div
                className={`flex flex-col gap-3 text-left 
                px-4 sm:px-6 md:px-12 lg:px-16 w-full`}
            >
                {/* Icon with 2 circle bg */}
                <div className="flex justify-start items-center">
                    <div className="bg-purple-100 rounded-full p-2 flex justify-center items-center">
                        <div className="bg-violet-200 rounded-full p-1 flex justify-center items-center">
                            <Image
                                src={icon}
                                alt="icon"
                                width={28}
                                height={28}
                                className="w-5 h-5"
                            />
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-normal">{title}</h3>
                <p className="text-gray-600 font-light">{content}</p>
            </div>

            <div className="flex-shrink-0 w-full md:w-[550px] px-2 sm:px-6 md:px-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-full h-auto"
                />
            </div>
        </div>
    );
};

export default InfoCard;
