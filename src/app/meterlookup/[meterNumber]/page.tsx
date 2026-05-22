import MeterLookupPageContent from "@/components/meterLookup/MeterLookupPageContent";

export default async function MeterLookupProfilePage({
  params,
}: {
  params: Promise<{ meterNumber: string }>;
}) {
  const { meterNumber } = await params;

  return (
    <MeterLookupPageContent meterNumber={decodeURIComponent(meterNumber)} />
  );
}
