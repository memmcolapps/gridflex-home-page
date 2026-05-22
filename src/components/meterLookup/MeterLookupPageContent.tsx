import QuestionCard from "@/components/cards/QuestionCard";
import MeterLookupCard from "@/components/meterLookup/MeterLookupCard";

export default function MeterLookupPageContent({
  meterNumber,
}: {
  meterNumber?: string;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mt-4 flex justify-center px-4 text-2xl font-medium text-white sm:mt-6 sm:text-3xl md:text-5xl">
        Meter Lookup
      </div>

      <div className="mt-6 flex-1 bg-white sm:mt-10">
        <div className="flex flex-col items-center gap-4 px-4 py-6 sm:px-6 sm:py-10 md:px-20">
          <h2 className="max-w-lg text-center text-lg font-medium text-gray-900 sm:text-xl md:text-2xl">
            Access complete meter profiles instantly.
          </h2>
          <p className="max-w-2xl text-center text-sm font-light text-gray-500 sm:text-base">
            Enter your meter number to retrieve customer details, current energy
            balance, and your last token purchase information.
          </p>

          <div className="w-full">
            <MeterLookupCard initialMeterNumber={meterNumber} />
          </div>

          <div className="mt-6 w-full max-w-3xl sm:mt-10">
            <QuestionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
