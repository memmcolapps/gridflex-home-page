'use client'

import { useState } from "react";
import ManagementInfo from "../(landingPage)/managementInfo/managementInfoSection";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Button from "@/components/buttons/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ContactUs() {
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    const items = ["Option 1", "Option 2", "Option 3"];

    return (
        <div className="bg-white ">
            <div className="flex flex-col px-8 md:px-0 gap-6 justify-center pt-20 py-10 items-center">
                <div className="bg-[#E6F3FF] px-5 py-1 tracking-wide text-[var(--primary)] text-lg font-light rounded-2xl">
                    Contact Us
                </div>
                <div className="text-center">
                    <span className="text-3xl md:text-5xl font-light">Get in <span className="text-[var(--primary)] ">touch with</span> us today</span>
                </div>
                <div className="flex text-sm md:text-normal flex-col md:w-2/3 font-extralight text-center">
                    Have questions, feedback, or need assistance? Our team is here to help and support you every step of the way. Get in touch with us today.
                </div>

                <div className="px-6 py-10 w-full md:px-10 md:py-10 md:w-1/2 mt-4 border border-gray-200 flex flex-col gap-8 rounded-lg">
                    <div className="grid w-full gap-3">
                        <Label htmlFor="name">Organization Name</Label>
                        <Input type="name" id="name" placeholder="Enter name" />
                    </div>
                    <div className="relative">
                    <Label className="pb-2" htmlFor="number">Organization Size</Label>
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="w-full px-4 py-3 flex items-center justify-between border border-gray-200 rounded-lg bg-white"
                        >
                            <span className={`${selected ? 'text-black' : 'text-gray-200'} text-sm`}>{selected || "Select organization size"}</span>
                            {open ? <ChevronUp color="#BDBDBD" strokeWidth={0.75} /> : <ChevronDown color="#BDBDBD" strokeWidth={0.75} />}
                        </button>

                        {open && (
                            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg">
                                {items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            setSelected(item);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer text-gray-500 text-sm hover:bg-gray-100"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="grid w-full gap-3">
                        <Label htmlFor="email">Email Address</Label>
                        <Input type="email" id="email" placeholder="Enter email address" />
                    </div>
                    <div className="grid w-full gap-3">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input type="phone" id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="grid w-full gap-3">
                        <Label htmlFor="message">Message</Label>
                        <Textarea placeholder="Message..." id="message" />
                    </div>

                    <Button text={"Send"} className="h-10" />
                </div>
            </div>
            <div>
                <ManagementInfo bgColor={"white"} textColor="black" circleColor='[#F4EBFF]' />
            </div>
        </div>
    )
}