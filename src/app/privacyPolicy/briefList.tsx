interface Props {
    title: string;
    paragraph: string;
    list?: string[];
}

export default function BriefList({ title, paragraph, list }: Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="font-medium">
                {title}
            </div>
            <div className="text-gray-600 font-light">
                {paragraph}
            </div>
            <div>
                <ul className="flex flex-col pb-8 px-4 gap-4 list-disc ml-4">
                    {list?.map((details, index) => (
                        <li key={index}>
                            <span>{details}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}