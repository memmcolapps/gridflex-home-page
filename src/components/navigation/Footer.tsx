"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[var(--primary)] px-4 py-5 font-extralight text-white sm:px-8 md:px-20">
      <div className="mt-4 flex flex-col gap-20 md:mt-0 md:gap-10">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center md:gap-10">
          <div className="flex flex-col gap-2">
            <div>
              <Image
                src="/icons/gridflex-logo.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
                placeholder="blur"
                blurDataURL={"/icons/gridflex-logo.svg"}
              />
            </div>
            <div>Unified access, Unlimited utility possibilities</div>
          </div>

          <div className="flex flex-row items-start justify-center gap-10 sm:items-center sm:gap-6 md:gap-20 md:pr-10">
            <div className="flex flex-col gap-4">
              <div className="text-lg font-normal sm:text-2xl">Contact</div>
              <Link
                target="_blank"
                href={"https://memmcol.com"}
                className="text-sm sm:text-base"
              >
                gridflex@memmcol.com
              </Link>
              <Link href="tel:+2348123456789" className="text-sm sm:text-base">
                +234 812 345 6789
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-lg font-normal sm:text-2xl">Policies</div>
              <div className="text-sm sm:text-base">
                <Link
                  className="flex flex-row gap-1"
                  target="_blank"
                  href={"/privacyPolicy"}
                >
                  Privacy Policy
                  <ArrowUpRight strokeWidth={1} />
                </Link>
              </div>
              <div className="text-sm sm:text-base">
                <Link
                  className="flex flex-row gap-1"
                  target="_blank"
                  href={"/termsOfUse"}
                >
                  Terms of Use
                  <ArrowUpRight strokeWidth={1} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between gap-2 md:flex-row md:items-center md:gap-0">
          <div className="text-sm sm:text-base">
            © 2025, Powered by MEMMCOL. All rights reserved.
          </div>
          <div></div>
          <div className="mb-2 flex flex-row gap-4 md:mb-0">
            <Image
              src={"/icons/twitter logo.svg"}
              alt={"X"}
              width={20}
              height={20}
              placeholder="blur"
              blurDataURL={"/icons/twitter logo.svg"}
            />
            <Image
              src={"/icons/whatsapp logo.svg"}
              alt={"Whatsapp"}
              width={20}
              height={20}
              placeholder="blur"
              blurDataURL={"/icons/whatsapp logo.svg"}
            />
            <Image
              src={"/icons/instagram logo.svg"}
              alt={"Instagram"}
              width={20}
              height={20}
              placeholder="blur"
              blurDataURL={"/icons/instagram logo.svg"}
            />
            <Image
              src={"/icons/Linkedin logo.svg"}
              alt={"LinkedIn"}
              width={20}
              height={20}
              placeholder="blur"
              blurDataURL={"/icons/Linkedin logo.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
