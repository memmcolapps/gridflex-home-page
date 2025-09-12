"use client";

import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CornerDivs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const size = isMobile ? 100 : 200;

  return (
    <>
      {/* Top Left */}
      <div className="absolute top-20 left-0 flex h-[100px] w-[100px] items-start justify-start border-r-2 border-b-2 border-gray-400 bg-transparent md:h-[200px] md:w-[200px]">
        <motion.div
          className="absolute right-0"
          animate={{
            y: [0, size, size, size, 0],
            x: [0, 0, -size, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="absolute right-0 bottom-[-30] translate-x-1/2 -translate-y-1/2">
            <div className="backdrop-lg flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]">
                <Image
                  src={"/icons/fluent-mdl2_data-management-settings.svg"}
                  alt={"..."}
                  width={15}
                  height={15}
                  placeholder="blur"
                  blurDataURL={
                    "/icons/fluent-mdl2_data-management-settings.svg"
                  }
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Right */}
      <div className="absolute top-20 right-0 flex h-[100px] w-[100px] items-start justify-end border-b-2 border-l-2 border-gray-400 bg-transparent md:h-[200px] md:w-[200px]">
        <motion.div
          className="absolute left-0"
          animate={{
            y: [0, size, size, size, 0],
            x: [0, 0, size, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="absolute bottom-[-30] left-[-30] translate-x-1/2 -translate-y-1/2">
            <div className="backdrop-lg flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]">
                <Image
                  src={"/icons/hugeicons_energy.svg"}
                  alt={"..."}
                  width={15}
                  height={15}
                  placeholder="blur"
                  blurDataURL={"/icons/hugeicons_energy.svg"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-4 left-0 mb-[-106px] h-[100px] w-[100px] border-t-2 border-r-2 border-gray-400 bg-transparent md:bottom-0 md:h-[200px] md:w-[200px]">
        <motion.div
          className="absolute"
          animate={{
            y: [size, 0, 0, 0, size],
            x: [size, size, 0, size, size],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <div className="backdrop-lg flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]">
                {/* <Image src={'/icons/_ui-credit-card-02.svg'} alt={"..."} width={15} height={15} /> */}
                <CreditCard width={15} height={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right */}
      <div className="absolute right-0 bottom-4 mb-[-106px] h-[100px] w-[100px] border-t-2 border-l-2 border-gray-400 bg-transparent md:bottom-0 md:h-[200px] md:w-[200px]">
        <motion.div
          animate={{
            y: [size, 0, 0, 0, size],
            x: [0, 0, size, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <div className="backdrop-lg flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]">
                <Image
                  src={"/icons/merge-cells_svgrepo.com.svg"}
                  alt={"..."}
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
