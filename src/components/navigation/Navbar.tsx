"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(false);

  const navLinks = [
    { name: "HOME", route: "/" },
    {
      name: "PRODUCTS",
      submenu: [
        { name: "Data Management", route: "/" },
        { name: "Meter Management", route: "/" },
        { name: "Vending Platform", route: "/" },
        { name: "Billing Platform", route: "/" },
        { name: "HES (Head-end System)", route: "/" },
      ],
    },
    { name: "CONTACT US", route: "/" },
  ];

  return (
    <div className="p-6 flex bg-red flex-row justify-between items-center relative">
      {/* Logo */}
      <div className="font-bold text-lg cursor-pointer" onClick={() => router.push("/")}>
        Logo
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        {navLinks.map((link, idx) =>
          link.submenu ? (
            <li key={idx} className="relative">
              <div
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                {link.name}
               {openDropdown ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>

              {/* Dropdown */}
              {openDropdown && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-20">
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
              className="cursor-pointer hover:text-blue-600"
            >
              {link.name}
            </li>
          )
        )}
      </ul>

      {/* Button */}
      <div>
       Button
      </div>
    </div>
  );
};

export default Navbar;
