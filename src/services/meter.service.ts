import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// ── Meter Info (meterInfo-lookup) ──────────────────────────────────────────
export interface MeterInfoData {
  region: string;
  feeder: string;
  dss: string;
  customerFullname: string;
  address: string;
  meterNumber: string;
  meterClass: string;
  meterModel: string;
  meterCategory: string;
  status: string;
  vat: string;
  businessName: string;
  manufacturerName: string;
  lastVendingDate: string;
  bandName: string;
  connectionType: string;
  lastVendingAmount: number;
  lastEnergyPurchase: number;
  averageDailyUsage: string;
  averageMonthlyUsage: string;
}

export interface MeterInfoResponse {
  responsecode: string;
  responsedesc: string;
  responsedata: MeterInfoData;
}

// ── Read Meter (readMeter-lookup) — types to be updated after inspecting
//    the network response
export interface ReadMeterData {
  [key: string]: unknown;
}

export interface ReadMeterResponse {
  responsecode: string;
  responsedesc: string;
  responsedata: ReadMeterData;
}

// ── Combined result the UI consumes ────────────────────────────────────────
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
  rawMeterInfo: MeterInfoData;
  rawReadMeter?: ReadMeterData;
}

export type MeterLookupStatus = "success" | "not_found" | "legacy";

export interface MeterLookupResponse {
  status: MeterLookupStatus;
  data?: MeterLookupResult;
}

// ── Individual API calls ───────────────────────────────────────────────────

export const fetchMeterInfo = async (
  meterNumber: string
): Promise<MeterInfoResponse> => {
  const response = await axios.get<MeterInfoResponse>(
    `https://sbctest.memmserve.com:8081/grid-flex/v1/api/meter/service/meterInfo-lookup`,
    { params: { meterNumber } }
  );
  return response.data;
};

export const fetchReadMeter = async (
  meterNumber: string
): Promise<ReadMeterResponse> => {
  const response = await axios.get<ReadMeterResponse>(
    `https://sbctest.memmserve.com:8081/grid-flex/v1/api/meter/service/readMeter-lookup`,
    {
      params: {
        meterNumber,
        readClock: "READ_CLOCK",
        readCredit: "READ_PUBLIC_CREDIT",
        readRelayStatus: "READ_RELAY_STATUS",
      },
    }
  );
  return response.data;
};

// ── Combined lookup (calls both APIs in parallel) ─────────────────────────

export const lookupMeterData = async (
  meterNumber: string
): Promise<MeterLookupResponse> => {
  const [infoSettled, readSettled] = await Promise.allSettled([
    fetchMeterInfo(meterNumber),
    fetchReadMeter(meterNumber),
  ]);

  if (infoSettled.status === "rejected") {
    return { status: "not_found" };
  }

  const infoResult = infoSettled.value;

  if (infoResult.responsecode !== "000") {
    return { status: "not_found" };
  }

  const info = infoResult.responsedata;
  const read =
    readSettled.status === "fulfilled"
      ? readSettled.value.responsedata
      : undefined;

  const data: MeterLookupResult = {
    customerName: info.customerFullname,
    meterModel: info.meterModel,
    meterClass: info.meterClass,
    meterCategory: info.meterCategory,
    meterManufacturer: info.manufacturerName,
    meterBand: info.bandName,
    businessHub: info.businessName,
    lastVendingAmount: String(info.lastVendingAmount),
    lastVendingDate: info.lastVendingDate.toLocaleString(),
    lastEnergyPurchased: String(info.lastEnergyPurchase),
    energyLeft: "",
    averageDailyUsage: info.averageDailyUsage,
    averageMonthlyUsage: info.averageMonthlyUsage,
    connectionStatus: info.connectionType === "ONLINE" ? "online" : "offline",
    relayStatus: "",
    meterTime: "",
    meterDate: "",
    rawMeterInfo: info,
    rawReadMeter: read,
  };

  return { status: "success", data };
};
