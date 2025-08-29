interface Props {
    title: string;
    paragraph?: string;
    list?: string[];
}

export default function BriefList({ title, paragraph, list }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-medium mb-2">
                {title}
            </div>
            <div className="text-gray-600 font-light mb-2">
                {paragraph}
            </div>
            <div>
                <ul className="flex flex-col pb-4 mb-2 px-4 gap-4 list-disc ml-4">
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