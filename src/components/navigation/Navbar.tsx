"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Button from "../buttons/Button";
import Image from 'next/image'

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
    { name: "CONTACT US", route: "/contactus" },
  ];
  
  useEffect(() => {
    setOpenDropdown(false);
    setMobileMenuOpen(false);
  }, [pathname]); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(target) &&
          navbarRef.current && 
          !navbarRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
      
      if (openDropdown && 
          navbarRef.current && 
          !navbarRef.current.contains(target)) {
        setOpenDropdown(false);
      }
    };

    if (mobileMenuOpen || openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, openDropdown]);

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
              className="cursor-pointer text-sm text-white p-2 hover:border-b-2 hover:border-white"
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-full left-0 w-full bg-white shadow-lg z-30 sm:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, idx) =>
              link.submenu ? (
                <li key={idx} className="flex flex-col">
                  <div
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className="flex justify-between items-center cursor-pointer px-2 py-2"
                  >
                    {link.name}
                    {openDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  {openDropdown && (
                    <ul className="flex flex-col rounded-md mt-1">
                      {link.submenu.map((sub, i) => (
                        <li
                          key={i}
                          onClick={() => router.push(sub.route)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={idx}
                  onClick={() => router.push(link.route)}
                  className="px-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                >
                  {link.name}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;