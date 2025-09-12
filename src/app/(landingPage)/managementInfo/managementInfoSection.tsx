import Image from "next/image";

interface Props {
  bgColor?: string;
  circleColor: string;
  textColor?: string;
}

export default function ManagementInfo({
  bgColor,
  circleColor,
  textColor,
}: Props) {
  return (
    <div className={`bg-${bgColor} text-white`}>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 px-4 py-10 sm:px-8 md:px-16">
        <div className={`bg-${circleColor} rounded-full p-3`}>
          <Image
            src={"/icons/zap-fast.svg"}
            alt={""}
            width={20}
            height={20}
            placeholder="blur"
            blurDataURL={"/icons/zap-fast.svg"}
          />
        </div>
        <div className={`text-2xl text-${textColor} text-center md:text-3xl`}>
          Unleash the full power of Utility Management
        </div>

        <div
          className={`w-full text-${textColor} text-center text-base font-light sm:text-sm`}
        >
          Everything you need to Monitor, Vend, Bill, and Store Customer Data
        </div>
      </div>
    </div>
  );
}
