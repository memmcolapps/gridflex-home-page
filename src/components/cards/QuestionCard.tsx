"use client";

import { useRouter } from "next/navigation";
import Button from "../buttons/Button";

export default function QuestionCard() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white px-4 py-6 sm:gap-6 sm:px-8 md:px-0">
      <span className="text-lg font-normal sm:text-xl">Still have questions?</span>
      <span className="text-center text-sm font-thin sm:text-base">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </span>
      <Button
        onClick={() => router.push("/contactus")}
        className="h-12 w-full sm:w-40"
        text={"Get In Touch"}
      />
    </div>
  );
}
