"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMeterInfo, fetchReadMeter } from "@/services/meter.service";

export const useMeterLookup = (meterNumber?: string) => {
  const lookupMeterNumber = meterNumber?.trim();
  const enabled = Boolean(lookupMeterNumber);

  const meterInfo = useQuery({
    queryKey: ["meter-info-lookup", lookupMeterNumber],
    queryFn: () => fetchMeterInfo(lookupMeterNumber!),
    enabled,
    retry: false,
  });

  const readMeter = useQuery({
    queryKey: ["read-meter-lookup", lookupMeterNumber],
    queryFn: () => fetchReadMeter(lookupMeterNumber!),
    enabled,
    retry: false,
  });

  return { meterInfo, readMeter, enabled };
};
