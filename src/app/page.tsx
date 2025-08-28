import Button from "@/components/buttons/Button";
import About from "./(landingPage)/about/page";
import Features from "./(landingPage)/features/page";
import ManagementInfo from "./(landingPage)/managementInfo/page";
import Gridflex from "./(landingPage)/gridflex/page";
import FaqCard from "./(landingPage)/Faq/page";
import GetStarted from "./(landingPage)/getStarted/page";
import { CirclePlay } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen text-white flex flex-col gap-6 justify-center items-center px-4 sm:px-8 md:px-16">
        <div className="text-3xl sm:text-4xl md:text-5xl text-center font-medium">
          Your Grid, Smarter Than Ever
        </div>

        <div className="text-base sm:text-lg md:text-xl w-full sm:w-[90%] md:w-[828px] text-center font-extralight">
          GridFlex simplifies electricity management with real-time data, smart automation, and an intuitive dashboard for total network control.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
          <Button icon={<CirclePlay color="#000" strokeWidth={1.3} />} className="w-full sm:w-40 h-12" variant="secondary" text="Demo" />
          <Button className="w-full sm:w-40 h-12" text="Get Started" />
        </div>

      </div>

      <div className="w-full bg-white pb-4">
        <About />
        <Features />
        <ManagementInfo bgColor={"[var(--primary)]"} circleColor={"white"} />
        <Gridflex />
        <FaqCard bgColor={"[var(--primary)]"} text={"white"} />
        <GetStarted />
      </div>
    </main>

  );
}
