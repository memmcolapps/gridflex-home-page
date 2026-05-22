"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "@/components/buttons/Button";
import { useMeterLookup } from "@/hooks/use-meter";
import type {
  MeterLookupResult,
  MeterLookupStatus,
} from "@/services/meter.service";

type ViewStatus = "idle" | "loading" | MeterLookupStatus;

function WindowTab() {
  return (
    <div className="absolute top-0 left-1/2 z-10 flex min-w-32 -translate-x-1/2 -translate-y-full items-center justify-center gap-3 rounded-t-md bg-[#161CCA] px-5 py-3 sm:min-w-40 sm:gap-4 sm:px-6 sm:py-4">
      <span className="h-3 w-3 rounded-full bg-[#F50202] sm:h-4 sm:w-4" />
      <span className="h-3 w-3 rounded-full bg-[#EBA13E] sm:h-4 sm:w-4" />
      <span className="h-3 w-3 rounded-full bg-[#059E40] sm:h-4 sm:w-4" />
    </div>
  );
}

const LOADING_ITEMS = [
  { type: "dot" as const, size: 12, delay: 0 },
  { type: "bar" as const, height: 22, delay: 120 },
  { type: "bar" as const, height: 48, delay: 240 },
  { type: "bar" as const, height: 22, delay: 360 },
  { type: "dot" as const, size: 12, delay: 480 },
] as const;

function LoadingBars() {
  return (
    <div className="flex items-end justify-center gap-2 py-8 sm:gap-3 sm:py-10">
      {LOADING_ITEMS.map((item, i) =>
        item.type === "dot" ? (
          <div
            key={i}
            className="meter-loading-dot shrink-0 rounded-full bg-[#A5A6F6]"
            style={{
              width: item.size,
              height: item.size,
              animationDelay: `${item.delay}ms`,
            }}
          />
        ) : (
          <div
            key={i}
            className="meter-loading-bar w-2 shrink-0 rounded-full bg-[#A5A6F6] sm:w-2.5"
            style={{
              height: item.height,
              animationDelay: `${item.delay}ms`,
            }}
          />
        ),
      )}
    </div>
  );
}

function MeterField({
  label,
  value,
  className,
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1 rounded-lg border border-gray-200 px-3 py-2.5 ${className ?? ""}`}
    >
      <span className="text-xs font-normal text-gray-500">{label}</span>
      <div className="w-full text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <p className="mt-4 mb-2 text-xs font-medium tracking-wide text-gray-500">
      {title}
    </p>
  );
}

function ConnectionStatus({ status }: { status: "online" | "offline" }) {
  const isOnline = status === "online";

  return (
    <span className="flex w-full items-center justify-between font-semibold">
      <span>{isOnline ? "Online" : "Offline"}</span>
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${
          isOnline ? "bg-green-500" : "bg-red-500"
        }`}
        aria-hidden
      />
    </span>
  );
}

function MeterResults({ data }: { data: MeterLookupResult }) {
  return (
    <div className="flex flex-col gap-1">
      <SectionHeader title="Meter Information" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MeterField
          label="Customer Name"
          value={data.customerName}
          className="sm:col-span-2"
        />
        <MeterField label="Meter Model" value={data.meterModel} />
        <MeterField label="Meter Class" value={data.meterClass} />
        <MeterField label="Meter Category" value={data.meterCategory} />
        <MeterField label="Meter Manufacturer" value={data.meterManufacturer} />
        <MeterField label="Meter Band" value={data.meterBand} />
        <MeterField label="Business Hub" value={data.businessHub} />
      </div>

      <SectionHeader title="Consumption Information" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MeterField
          label="Last Vending Amount"
          value={data.lastVendingAmount}
        />
        <MeterField label="Last Vending Date" value={data.lastVendingDate} />
        <MeterField
          label="Last Energy Purchased (kwh)"
          value={data.lastEnergyPurchased}
        />
        <MeterField label="Energy Left (kwh)" value={data.energyLeft} />
        <MeterField
          label="Average Daily Usage (kwh)"
          value={data.averageDailyUsage}
        />
        <MeterField
          label="Average Monthly Usage (kwh)"
          value={data.averageMonthlyUsage}
        />
      </div>

      <SectionHeader title="Meter Status" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MeterField
          label="Connection Status"
          value={<ConnectionStatus status={data.connectionStatus} />}
        />
        <MeterField label="Relay Status" value={data.relayStatus} />
        <MeterField label="Meter Time" value={data.meterTime} />
        <MeterField label="Meter Date" value={data.meterDate} />
      </div>

      <button
        type="button"
        className="mt-6 w-full cursor-pointer rounded-xl border-2 border-[var(--primary)] py-2.5 font-semibold text-[var(--primary)] transition hover:bg-[#E6F3FF]"
      >
        Export
      </button>
    </div>
  );
}

const ERROR_IMAGE_SIZE = 200;
const ERROR_IMAGE_SCALE = 2.2;

function ErrorState({
  imageSrc,
  imageAlt,
  heading,
  description,
}: {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-6 text-center">
      <div
        className="flex items-center justify-center overflow-hidden sm:px-0"
        style={{
          width: ERROR_IMAGE_SIZE,
          height: ERROR_IMAGE_SIZE,
        }}
      >
        {/* Native img + scale zooms past PNG padding so the artwork appears larger */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-none max-w-none object-contain"
          style={{
            width: ERROR_IMAGE_SIZE,
            height: ERROR_IMAGE_SIZE,
            transform: `scale(${ERROR_IMAGE_SCALE})`,
            transformOrigin: "center",
          }}
        />
      </div>
      <h3 className="text-base font-medium text-[var(--primary)] sm:text-lg">
        {heading}
      </h3>
      <p className="max-w-sm text-sm font-light text-gray-500">{description}</p>
    </div>
  );
}

export default function MeterLookupCard() {
  const [meterNo, setMeterNo] = useState("");

  const { mutate: lookupMeter, isPending, data } = useMeterLookup();

  const handleSearch = () => {
    if (!meterNo.trim()) return;
    lookupMeter(meterNo.trim());
  };

  const viewStatus: ViewStatus =
    data === undefined
      ? isPending
        ? "loading"
        : "idle"
      : data.status === "success"
        ? "success"
        : data.status;

  const result: MeterLookupResult | null =
    data?.status === "success" ? data.data ?? null : null;

  return (
    <div className="mx-auto mt-10 w-full max-w-3xl pt-5 sm:mt-12 sm:pt-6">
      <div className="relative flex flex-col gap-5 rounded-xl border-2 border-[var(--primary)] bg-white px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 md:px-10">
        <WindowTab />
        <div className="grid w-full gap-3">
          <Label htmlFor="meter-no">Meter no</Label>
          <Input
            id="meter-no"
            placeholder="e.g., 01023456789"
            value={meterNo}
            onChange={(e) => setMeterNo(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <Button
          text="Search"
          onClick={handleSearch}
          disabled={isPending || !meterNo.trim()}
          className="h-12 w-full cursor-pointer"
        />

        {viewStatus === "loading" && <LoadingBars />}

        {viewStatus === "success" && result && <MeterResults data={result} />}

        {viewStatus === "not_found" && (
          <ErrorState
            imageSrc="/images/MLIMAGE1.png"
            imageAlt="Meter not found"
            heading="We couldn't find that meter number"
            description="Please double-check your number and try again. Minor typos happen easily!"
          />
        )}

        {viewStatus === "legacy" && (
          <ErrorState
            imageSrc="/images/MLIMAGE2.png"
            imageAlt="Legacy meter"
            heading="Meter is not registered as a Smart Meter"
            description="We found your meter, but it is a traditional/legacy model. Because it lacks a digital network connection, real-time balance tracking and automated data retrieval are unavailable."
          />
        )}
      </div>
    </div>
  );
}
