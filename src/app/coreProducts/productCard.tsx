import Image from "next/image";

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
        className={`flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-12 ${className}`}
      >
        <div
          className={`flex w-full flex-col gap-3 px-6 py-4 text-left md:px-20`}
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

          <div className="flex flex-row gap-1">
            <h3 className="text-2xl font-normal">{title}</h3>
            <span className="hidden items-end md:flex">—</span>
            <span className="mt-2 hidden items-center text-sm md:flex">
              {subText}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-light text-gray-600">{para1}</p>
            <p className="font-light text-gray-600">{para2}</p>
          </div>

          <div>
            <span className="font-light text-gray-600">{subTitle}</span>
            <div>
              <ul className="mt-3 ml-4 flex list-disc flex-col gap-4 px-4">
                {subList.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex-shrink-0 px-2 sm:px-6 md:w-[550px] md:px-0">
          <Image
            src={imageSrc}
            alt={"..."}
            width={500}
            height={500}
            className="h-auto w-full rounded-lg object-cover"
            placeholder="blur"
            blurDataURL={icon}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-col px-6 py-2 font-light text-gray-600 md:px-20">
        {paraEnd}
        <span className="mt-6">{para3}</span>
      </div>
    </div>
  );
}
