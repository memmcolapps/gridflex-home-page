import Button from '@/components/buttons/Button'
import { CircleCheck } from 'lucide-react'
import Image from 'next/image'

const items = [
    'Seamless integration',
    'Personalized onboarding',
    'Access to all features'
]

export default function GetStarted() {
    return (
        <div>
            <div
                className={`flex flex-col md:flex-row mb-4 items-center md:justify-between gap-6 md:gap-12 `}
            >
                <div
                    className={`flex flex-col gap-6 text-left 
                px-4 sm:px-6 md:px-12 lg:px-16 w-full`}
                >

                    <h3 className="text-2xl font-normal">Trusted by leading utilities for smarter energy management.</h3>
                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CircleCheck className="w-5 h-5 text-[var(--primary)] shrink-0" strokeWidth={1.2} />
                                <p className="text-gray-600 font-light">{item}</p>
                            </li>
                        ))}
                    </ul>

                    <Button className="w-full sm:w-40 h-12 mt-4 " text={"Get Started"} />
                </div>

                <div className="flex-shrink-0 w-full md:w-[550px] px-2 sm:px-6 md:px-0">
                    <Image
                        src={'/images/image 21.svg'}
                        alt={'Vending'}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}