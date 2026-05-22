export type MeterLookupStatus = "success" | "not_found" | "legacy";

export interface MeterLookupResult {
  customerName: string;
  meterModel: string;
  meterClass: string;
  meterCategory: string;
  meterManufacturer: string;
  meterBand: string;
  businessHub: string;
  lastVendingAmount: string;
  lastVendingDate: string;
  lastEnergyPurchased: string;
  energyLeft: string;
  averageDailyUsage: string;
  averageMonthlyUsage: string;
  connectionStatus: "online" | "offline";
  relayStatus: string;
  meterTime: string;
  meterDate: string;
}

export interface MeterLookupResponse {
  status: MeterLookupStatus;
  data?: MeterLookupResult;
}

const ONLINE_METER: MeterLookupResult = {
  customerName: "Mashood Alimi",
  meterModel: "MMX-310-NG",
  meterClass: "Three Phase",
  meterCategory: "Prepaid",
  meterManufacturer: "Momas",
  meterBand: "Band A",
  businessHub: "Mowe",
  lastVendingAmount: "20,000",
  lastVendingDate: "12-05-2026",
  lastEnergyPurchased: "200kwh",
  energyLeft: "100kwh",
  averageDailyUsage: "10kwh",
  averageMonthlyUsage: "100kwh",
  connectionStatus: "online",
  relayStatus: "Relay Closed",
  meterTime: "10:10",
  meterDate: "19-05-2026",
};

const OFFLINE_METER: MeterLookupResult = {
  ...ONLINE_METER,
  connectionStatus: "offline",
  relayStatus: "-",
  meterTime: "-",
  meterDate: "-",
};

const MOCK_DELAY_MS = 800;

export function lookupMeter(meterNo: string): Promise<MeterLookupResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const trimmed = meterNo.trim();

      if (trimmed === "62226000206") {
        resolve({ status: "success", data: ONLINE_METER });
        return;
      }

      if (trimmed === "62226000207") {
        resolve({ status: "success", data: OFFLINE_METER });
        return;
      }

      if (trimmed === "62226000208") {
        resolve({ status: "legacy" });
        return;
      }

      resolve({ status: "not_found" });
    }, MOCK_DELAY_MS);
  });
}
