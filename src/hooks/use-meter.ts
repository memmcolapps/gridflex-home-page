"use client";

import { useMutation } from "@tanstack/react-query";
import { lookupMeterData } from "@/services/meter.service";

export const useMeterLookup = () => {
  return useMutation({
    mutationFn: (meterNumber: string) => lookupMeterData(meterNumber),
  });
};
