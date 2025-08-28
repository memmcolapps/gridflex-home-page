'use client'

import { CirclePlay, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image'
import { useEffect, useState } from "react";

export default function CornerDivs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const size = isMobile ? 100 : 200;

  return (
    <>
      {/* Top Left */}
      <div className="absolute top-20 left-0 w-[100px] md:w-[200px] h-[100px] md:h-[200px] border-r-2 border-b-2 border-gray-400 bg-transparent flex items-start justify-start">
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
          <div className="absolute bottom-[-30] right-0 translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <Image src={'/icons/fluent-mdl2_data-management-settings.svg'} alt={"..."} width={15} height={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Right */}
      <div className="absolute top-20 right-0 w-[100px] md:w-[200px] h-[100px] md:h-[200px] border-l-2 border-b-2  border-gray-400 bg-transparent flex items-start justify-end">
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
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <Image src={'/icons/hugeicons_energy.svg'} alt={"..."} width={15} height={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-4 md:bottom-0 left-0 w-[100px] md:w-[200px] h-[100px] md:h-[200px] border-r-2 border-t-2 border-gray-400 bg-transparent mb-[-106px] ">
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
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                {/* <Image src={'/icons/_ui-credit-card-02.svg'} alt={"..."} width={15} height={15} /> */}
                <CreditCard width={15} height={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-4 md:bottom-0 right-0 w-[100px] md:w-[200px] h-[100px] md:h-[200px] border-l-2 border-t-2 border-gray-400 bg-transparent mb-[-106px] ">
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
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
                <Image src={'/icons/merge-cells_svgrepo.com.svg'} alt={"..."} width={15} height={15} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}