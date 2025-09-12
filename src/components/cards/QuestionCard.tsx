"use client";

import { useRouter } from "next/navigation";
import Button from "../buttons/Button";

export default function QuestionCard() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-white px-8 py-6 md:px-0">
      <span className="text-xl font-normal">Still have questions?</span>
      <span className="text-base font-thin">
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
