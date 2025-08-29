import { Shield } from "lucide-react";
import BriefList from "./briefList";
import Link from "next/link";
import ManagementInfo from "../(landingPage)/managementInfo/managementInfoSection";
import FaqCard from "../(landingPage)/Faq/faqSection";

const PRIVACY_POLICY = [
    {
        title: '1. Information We Collect',
        paragraph: 'We may collect:',
        list: [
            'Personal details you provide during registration (e.g., full name, phone number, email address).',
            'Meter, billing, and vending data linked to your account.',
            'Transaction history, payment details, and energy usage patterns.',
            'Device information and IP address for security and analytics purposes.'
        ]
    },
    {
        title: '2. Purpose of Data Processing',
        paragraph: 'We process your information to:',
        list: [
            'Provide, operate, and improve our meter management and vending services.',
            'Process transactions and manage your account.',
            'Detect and prevent fraud, unauthorized access, or misuse.',
            'Comply with applicable laws and regulatory obligations (e.g., NERC guidelines).'
        ]
    },
    {
        title: '3. Legal Basis for Processing',
        paragraph: 'Your data is processed based on one or more of the following:',
        list: [
            'Your consent.',
            'Fulfillment of contractual obligations.',
            'Compliance with legal/regulatory requirements.',
        ]
    },
    {
        title: '4. Data Sharing & Disclosure',
        paragraph: 'We do not sell your personal data. We may share your information with:',
        list: [
            'Licensed DisCos and regulatory bodies where required.',
            'Trusted third-party service providers for secure payment processing, hosting, or analytics.',
            'Law enforcement or regulatory authorities when legally mandated.',
        ]
    },
    {
        title: '5. Data Security & Retention',
        paragraph: 'We use encryption, firewalls, and secure servers to protect your data. Your information is retained only as long as necessary for the purposes outlined or as required by law.',
    },
    {
        title: '6. Your Rights Under NDPR',
        paragraph: 'You have the right to:',
        list: [
            'Access your personal data.',
            'Request corrections or updates.',
            'Request deletion of your data (where applicable).',
            'Withdraw consent at any time without affecting prior lawful processing.'
        ]
    },
]

const FAQ_ITEM = [
    {
        question: 'Can I control meters remotely using the dashboard?',
        answer: 'Yes, you can perform remote connect, disconnect, and configuration operations.'
    },
    {
        question: 'Can the system send alerts?',
        answer: 'I guess'
    },
    {
        question: 'How secure is the system?',
        answer: `I don't know I didn't build it. `
    },
    {
        question: 'Can multiple users access the dashboard?',
        answer: `I guess do u wanna access it ?`
    },
    {
        question: 'Can I generate reports from the dashboard?',
        answer: `You should be able to  `
    }
];

export default function Policy() {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex justify-center mt-6 text-3xl md:text-5xl font-medium text-white">
          Privacy Policy
        </div>
  
        <div className="bg-white flex-1 mt-10">
          <div className="px-6 md:px-20 py-10 flex flex-col gap-4 font-light text-gray-600">
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center">
                <div className="bg-purple-100 rounded-full p-2 flex justify-center items-center">
                  <div className="bg-violet-200 rounded-full p-1 flex justify-center items-center">
                    <Shield color="#161CCA" strokeWidth={1.75} />
                  </div>
                </div>
              </div>
  
              <div>
                At GridFlex, we value your privacy and are committed to safeguarding your personal data in accordance with the Nigeria Data Protection Regulation (NDPR) and applicable laws. This Privacy Policy explains how we collect, use, disclose, and protect your information.
              </div>
            </div>
  
            <div>
              {PRIVACY_POLICY.map((details, index) => (
                <div key={index}>
                  <BriefList title={details.title} paragraph={details.paragraph} list={details.list} />
                </div>
              ))}
            </div>
  
            <div className="flex gap-1">
              To exercise your rights, contact:
              <span>
                <Link className="font-medium" href={"/"}>
                  gridflex@memmcol.com
                </Link>
              </span>
            </div>
          </div>
  
          <div>
            <ManagementInfo bgColor={"[var(--primary)]"} circleColor={"white"} />
          </div>
          <div>
            <FaqCard bgColor={"white"} text={"black"} faqItems={FAQ_ITEM}  />
          </div>
        </div>
      </div>
    );
  }
  