"use client";

import Button from "@/components/buttons/Button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const items = [
  "Seamless integration",
  "Personalized onboarding",
  "Access to all features",
];

export default function GetStarted() {
  const router = useRouter();
  return (
    <div>
      <div
        className={`mb-4 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-12`}
      >
        <div
          className={`flex w-full flex-col gap-6 px-4 text-left sm:px-6 md:px-12 lg:px-16`}
        >
          <h3 className="text-2xl font-normal">
            Trusted by leading utilities for smarter energy management.
          </h3>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CircleCheck
                  className="h-5 w-5 shrink-0 text-[var(--primary)]"
                  strokeWidth={1.2}
                />
                <p className="font-light text-gray-600">{item}</p>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => router.push("/contactus")}
            className="mt-4 h-12 w-full sm:w-40"
            text={"Get Started"}
          />
        </div>

        <div className="w-full flex-shrink-0 px-2 sm:px-6 md:w-[550px] md:px-0">
          <Image
            src={"/images/image 21.svg"}
            alt={"Vending"}
            width={500}
            height={500}
            className="h-auto w-full rounded-lg object-cover"
            placeholder="blur"
            blurDataURL={"/images/image 21.svg"}
          />
        </div>
      </div>
    </div>
  );
}
