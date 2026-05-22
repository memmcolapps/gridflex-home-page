"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Button from "../buttons/Button";
import Image from 'next/image'
import { cn } from "@/lib/utils";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navbarRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "HOME", route: "/" },
    {
      name: "PRODUCTS",
      submenu: [
        { name: "Data Management", route: "/coreProducts/#Data_Management" },
        { name: "Meter Management", route: "/coreProducts/#Meter_Management" },
        { name: "Vending Platform", route: "/coreProducts/#Vending_Platform" },
        { name: "Billing Platform", route: "/coreProducts/#Billing_Platform" },
        { name: "HES (Head-end System)", route: "/coreProducts/#Hes_Headend" },
      ],
    },
    { name: "METER LOOKUP", route: "/meterLookup" },
    { name: "CONTACT US", route: "/contactus" },
  ];
  
  useEffect(() => {
    setOpenDropdown(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        openDropdown &&
        navbarRef.current &&
        !navbarRef.current.contains(target)
      ) {
        setOpenDropdown(false);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <nav ref={navbarRef} className="px-4 md:px-14 py-4 flex flex-row justify-between items-center relative">
      <div className="font-bold text-lg cursor-pointer w-10 sm:w-12 md:w-16" onClick={() => router.push("/")}>
        <Image
          src="/icons/gridflex-logo.svg"
          alt="Logo"
          width={40}
          height={40}
          priority
          style={{ width: '60%', height: 'auto' }}
        />
      </div>

      {/* Web Navbar */}
      <ul className="hidden sm:flex gap-6 items-center">
        {navLinks.map((link, idx) =>
          link.submenu ? (
            <li key={idx} className="relative p-2 hover:border-b-2 hover:border-white">
              <div
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="flex text-sm text-white items-center gap-1"
              >
                {link.name}
                {openDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>

              {openDropdown && (
                <ul className="absolute left-0 w-[343px] bg-white shadow-lg rounded-lg py-2 z-20">
                  {link.submenu.map((sub, i) => (
                    <li
                      key={i}
                      onClick={() => router.push(sub.route)}
                      className="px-4 py-2 hover:text-gray-500 cursor-pointer block w-full"
                    >
                      {sub.name}
                      {i !== link.submenu.length - 1 && (
                        <hr className="w-full mt-2 border-gray-100" />
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li
              key={idx}
              onClick={() => router.push(link.route)}
              className={cn(
                "cursor-pointer text-sm text-white p-2",
                pathname === link.route
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              )}
            >
              {link.name}
            </li>
          )
        )}
      </ul>

      <div className="hidden sm:block">
        <Button onClick={() => router.push('/contactus')} text={"Get Started"} className="w-36 text-sm h-10" />
      </div>

      {/* Hamburger */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
          {mobileMenuOpen ? <X color="white" size={16} /> : <Menu color="white" size={16} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/50 sm:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside
            ref={mobileMenuRef}
            className="fixed top-0 right-0 z-50 flex h-full w-[min(300px,85vw)] flex-col bg-white shadow-xl sm:hidden"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="text-lg font-semibold text-[var(--primary)]"
              >
                GridFlex
              </button>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-1 hover:bg-gray-100"
              >
                <X size={20} className="text-gray-800" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map((link, idx) =>
                link.submenu ? (
                  <div key={idx} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
                    >
                      {link.name}
                      {openDropdown ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {openDropdown && (
                      <ul className="mb-2 ml-2 flex flex-col border-l border-gray-200 pl-3">
                        {link.submenu.map((sub, i) => (
                          <li key={i}>
                            <button
                              type="button"
                              onClick={() => router.push(sub.route)}
                              className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-gray-600 hover:bg-gray-50"
                            >
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => router.push(link.route)}
                    className={cn(
                      "w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition",
                      pathname === link.route
                        ? "bg-[#E6F3FF] text-[var(--primary)]"
                        : "text-gray-800 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </button>
                )
              )}
            </nav>

            <div className="border-t border-gray-100 p-4">
              <Button
                onClick={() => router.push("/contactus")}
                text="Get Started"
                className="h-11 w-full text-sm"
              />
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;