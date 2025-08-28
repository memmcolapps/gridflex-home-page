import Image from 'next/image';

interface Props {
    id: string;
    icon: string;
    para1: string;
    para2: string;
    para3?: string;
    title: string;
    subText: string;
    subTitle: string;
    subList: string[];
    paraEnd: string;
    imageSrc: string;
    className?: string;
}

export default function ProductCard({
    id,
    icon,
    para1,
    para2,
    title,
    subText,
    subTitle,
    subList,
    paraEnd,
    para3,
    imageSrc,
    className,
}: Props) {
    return (
        <div className={`${id} flex flex-col gap-5`}>
            <div
                className={`flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-12 ${className}`}
            >
                <div
                    className={`flex flex-col gap-3 text-left 
            px-6 md:px-20 py-4 w-full`}
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

                    <div className='flex flex-row gap-1'>
                        <h3 className="text-2xl font-normal">{title}</h3>
                        <span className=' hidden md:flex items-end'>—</span>
                        <span className='text-sm hidden md:flex mt-2 items-center '>{subText}</span>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className="text-gray-600 font-light">{para1}</p>
                        <p className="text-gray-600 font-light">{para2}</p>
                    </div>

                    <div>
                        <span className="text-gray-600 font-light">{subTitle}</span>
                        <div>
                            <ul className='flex flex-col px-4 mt-3 gap-4 list-disc ml-4'>
                                {subList.map((item, index) => (
                                    <li key={index}>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-[550px] px-2 sm:px-6 md:px-0">
                    <Image
                        src={imageSrc}
                        alt={'...'}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>

            <div className="text-gray-600 flex flex-col px-6 md:px-20 py-2 mb-4 font-light">
                {paraEnd}
                <span className='mt-6'>
                    {para3}
                </span>
            </div>
        </div>

    )
}