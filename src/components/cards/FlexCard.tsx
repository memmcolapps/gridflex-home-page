'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
    icon: string;
    title: string;
    content: string;
}

const FlexCard: React.FC<CardProps> = ({
    icon,
    title,
    content
}) => {
    return (
        <div className='bg-white px-4 py-6 shadow-lg rounded-xl flex flex-col gap-3 text-left'>
            <div className="flex justify-start items-center">
                <div className='bg-[var(--primary)] rounded-xl p-3 flex justify-center items-center'>
                    <Image
                        src={icon}
                        alt="icon"
                        width={28}
                        height={28}
                        className="w-5 h-5"
                    />
                </div>
            </div>
            <div className='mt-4 flex flex-col gap-2'>
                <h3 className="text-xl font-normal">{title}</h3>
                <p className="text-gray-500 text-sm font-light">{content}</p>
            </div>
        </div>
    )
}

export default FlexCard;