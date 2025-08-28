import Button from "../buttons/Button";

export default function QuestionCard(){
    return(
        <div className="bg-white rounded-xl px-8 md:px-0 py-6  flex flex-col gap-6 items-center justify-center">
            <span className="text-xl font-normal">
            Still have questions?
            </span>
            <span className="text-base font-thin">
            Can’t find the answer you’re looking for? Please chat to our friendly team.
            </span>
            <Button className="w-full sm:w-40 h-12" text={"Get In Touch"}/>
        </div>
    )
}