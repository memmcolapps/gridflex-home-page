import QuestionCard from "@/components/cards/QuestionCard";
import Faq from "@/components/Faq/Faq";

interface Props{
    bgColor: string;
    text: string;
}

export default function FaqCard({ bgColor, text }:Props) {
    return (
        <div className={`bg-${bgColor} py-12 mb-10 `}>
            <div className="md:px-70 py-10">
                <div className={`flex flex-col gap-4 mb-4 text-${text} items-center justify-center`}>
                    <span className="text-3xl font-normal text-center">Frequently asked questions</span>
                    <span className="font-thin">Everything you need to know about Gridflex.</span>
                </div>
                <div className="px-4 md:px-0">
                    <Faq textColor={text} />
                </div>
            </div>
            <div className="md:px-10 px-4">
                <QuestionCard/>
            </div>

        </div>
    )
}