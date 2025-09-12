import InfoCard from "@/components/cards/InfoCard";

export default function Features() {
  return (
    <div className="flex flex-col gap-14 py-20">
      <InfoCard
        icon={"/icons/Data management.svg"}
        title={"Data Management"}
        content={
          "A centralized data management module that lets you easily organize meters, customers, and regions while configuring bands and tariffs for accurate billing and smoother operations."
        }
        imageSrc={"/images/Tariff 1.svg"}
      />
      <InfoCard
        icon={"/icons/Meter Management.svg"}
        title={"Meter Management"}
        content={
          "The Meter Management module lets you monitor and control all physical and virtual meters from one dashboard, making it easy to allocate, assign, and track devices while supporting unmetered customers through virtual metering."
        }
        imageSrc={"/images/Meter Inventory 1.svg"}
        imagePosition="right"
      />
      <InfoCard
        icon={"/icons/Vending.svg"}
        title={"Vending"}
        content={
          "The Vending Module allows fast, secure generation and distribution of prepaid electricity tokens, enabling instant delivery, protected transactions, and centralized management of sales, payments, and history."
        }
        imageSrc={"/images/3_2 screen mockup.svg"}
      />
      <InfoCard
        icon={"/icons/HES.svg"}
        title={"HES"}
        content={
          "The HES module provides centralized, real-time control of all smart meters, enabling remote reads, commands, and monitoring, with automated scheduling for hands-off efficiency."
        }
        imageSrc={"/images/4th image.svg"}
        imagePosition="right"
      />
    </div>
  );
}
