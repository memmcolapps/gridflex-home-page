import Image from 'next/image'

interface Props {
    bgColor?: string;
    circleColor: string;
    textColor?: string;
}

export default function ManagementInfo({ bgColor, circleColor, textColor }: Props) {
    return (
        <div className={`bg-${bgColor} text-white `}>
            <div className="py-10 px-4 sm:px-8 md:px-16 flex mt-6 flex-col items-center gap-4 justify-center">
                <div className={`bg-${circleColor} p-3 rounded-full`}>
                    <Image src={'/icons/zap-fast.svg'} alt={''} width={20} height={20} />
                </div>
                <div className={`text-2xl text-${textColor} md:text-3xl text-center`}>
                    Unleash the full power of Utility Management
                </div>

                <div className={`w-full text-${textColor} text-center font-light text-base sm:text-sm`}>
                    Everything you need to Monitor, Vend, Bill, and Store Customer Data
                </div>
            </div>
        </div>

    )
}
