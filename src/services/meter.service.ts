import axios from "axios";

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

// ── Read Meter (readMeter-lookup) ─────────────────────────────────────────
export interface ReadMeterOperation {
  operationAction: "READ_CLOCK" | "READ_PUBLIC_CREDIT" | "READ_RELAY_STATUS";
  obisCode: string;
  status: "SUCCESS" | "FAILED";
  value?: number | string | boolean;
  relayStatus?: string;
  error?: string;
  valueResponse?: {
    error_code: number;
    value: number | string | boolean;
    success: boolean;
    timestamp: string;
  };
  unit?: string;
  scaler?: number;
  ["Meter No"]?: string;
  attributeIndex?: number;
  dataIndex?: number;
}

export interface ReadMeterResponse {
  responsecode: string;
  responsedesc: string;
  responsedata: ReadMeterOperation[];
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
  rawReadMeter?: ReadMeterOperation[];
}

export type MeterLookupStatus = "success" | "not_found" | "legacy";

export interface MeterLookupResponse {
  status: MeterLookupStatus;
  data?: MeterLookupResult;
}

export interface MeterReadValues {
  energyLeft: string;
  relayStatus: string;
  meterTime: string;
  meterDate: string;
  rawReadMeter: ReadMeterOperation[];
}

// ── Individual API calls ───────────────────────────────────────────────────

export const fetchMeterInfo = async (
  meterNumber: string,
): Promise<MeterInfoResponse> => {
  const response = await axios.get<MeterInfoResponse>(
    `https://sbctest.memmserve.com:8081/grid-flex/v1/api/meter/service/meterInfo-lookup`,
    { params: { meterNumber } },
  );
  return response.data;
};

export const fetchReadMeter = async (
  meterNumber: string,
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
    },
  );
  return response.data;
};

// ── Helpers for parsing readMeter operations ──────────────────────────────

function findOperation(
  operations: ReadMeterOperation[],
  action: string,
): ReadMeterOperation | undefined {
  return operations.find((op) => op.operationAction === action);
}

function formatClockValue(op: ReadMeterOperation): {
  date: string;
  time: string;
} {
  const raw = op.valueResponse?.timestamp ?? op.value;
  if (typeof raw === "string") {
    const d = new Date(raw);
    if (!isNaN(d.getTime())) {
      return {
        date: d.toLocaleDateString(),
        time: d.toLocaleTimeString(),
      };
    }
  }
  return { date: "", time: "" };
}

export function getMeterReadValues(
  readOps: ReadMeterOperation[] = [],
  unavailableValue = "Not available",
): MeterReadValues {
  const creditOp = findOperation(readOps, "READ_PUBLIC_CREDIT");
  const relayOp = findOperation(readOps, "READ_RELAY_STATUS");
  const clockOp = findOperation(readOps, "READ_CLOCK");

  const clock =
    clockOp?.status === "SUCCESS" ? formatClockValue(clockOp) : null;

  return {
    energyLeft:
      creditOp?.status === "SUCCESS"
        ? String(creditOp.value ?? "")
        : unavailableValue,
    relayStatus:
      relayOp?.status === "SUCCESS"
        ? (relayOp.relayStatus ?? "")
        : unavailableValue,
    meterTime: clock?.time ?? unavailableValue,
    meterDate: clock?.date ?? unavailableValue,
    rawReadMeter: readOps,
  };
}

export function buildMeterLookupResult(
  info: MeterInfoData,
  readOps?: ReadMeterOperation[],
): MeterLookupResult {
  const readValues = getMeterReadValues(
    readOps,
    readOps ? "Not available" : "Loading...",
  );

  const data: MeterLookupResult = {
    customerName: info.customerFullname,
    meterModel: info.meterModel,
    meterClass: info.meterClass,
    meterCategory: info.meterCategory,
    meterManufacturer: info.manufacturerName,
    meterBand: info.bandName,
    businessHub: info.businessName,
    lastVendingAmount: String(info.lastVendingAmount),
    lastVendingDate: new Date(info.lastVendingDate).toLocaleDateString(),
    lastEnergyPurchased: String(info.lastEnergyPurchase),
    energyLeft: readValues.energyLeft,
    averageDailyUsage: info.averageDailyUsage,
    averageMonthlyUsage: info.averageMonthlyUsage,
    connectionStatus: info.connectionType === "ONLINE" ? "online" : "offline",
    relayStatus: readValues.relayStatus,
    meterTime: readValues.meterTime,
    meterDate: readValues.meterDate,
    rawMeterInfo: info,
    rawReadMeter: readValues.rawReadMeter,
  };

  return data;
}
