import { Shield } from "lucide-react";
import Link from "next/link";
import ManagementInfo from "../(landingPage)/managementInfo/managementInfoSection";
import FaqCard from "../(landingPage)/Faq/faqSection";
import BriefList from "../privacyPolicy/briefList";


const TERMS_OF_USE = [
    {
        title: '1. Service Description',
        paragraph: 'GridFlex provides digital tools for prepaid/postpaid meter management, vending, billing automation, and energy monitoring. Service availability may vary by DisCo or location.',
    },
    {
        title: '2. User Responsibilities',
        list: [
            'Use the platform only for lawful purposes.',
            'Provide accurate and up-to-date personal and meter details.',
            'Maintain the confidentiality of your login credentials.',
            'Immediately report suspicious activity or unauthorized access.',
        ]
    },
    {
        title: '3. Intellectual Property',
        paragraph: 'All content, designs, software, and trademarks within GridFlex are owned by GridFlex and may not be copied, altered, or redistributed without written permission.',
    },
    {
        title: '4. Limitations of Liability',
        paragraph: 'GridFlex is not liable for:',
        list: [
            'Service disruptions due to power outages, network failures, or DisCo downtime.',
            'Errors caused by incorrect data provided by the user.',
            'Unauthorized access due to compromised user credentials.',
        ]
    },
    {
        title: '5. Compliance & Enforcement',
        paragraph: 'Users must comply with:',
        list: [
            'NERC guidelines on electricity vending and billing.',
            'Applicable consumer protection laws.',
            'NDPR requirements for handling customer data.',
        ]
    },
    {
        title: '6. Termination of Service',
        paragraph: 'We reserve the right to suspend or terminate accounts for:',
        list: [
            'Breach of these Terms.',
            'Fraudulent activities.',
            'Misuse of the platform.',
        ]
    },
    {
        title: '7. Updates to Terms',
        paragraph: 'We may update these Terms from time to time. Continued use of GridFlex means you accept the updated Terms.',
    }
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

export default function Terms() {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex justify-center mt-6 text-3xl md:text-5xl font-medium text-white">
        Terms of Use
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
                These Terms of Use (“Terms”) govern your access to and use of the GridFlex platform. By using our services, you agree to these Terms and all applicable laws, including the NDPR and Nigeria Electricity Regulatory Commission (NERC) guidelines.
             </div>
            </div>
  
            <div>
              {TERMS_OF_USE.map((details, index) => (
                <div key={index}>
                  <BriefList title={details.title} paragraph={details.paragraph} list={details.list} />
                </div>
              ))}
            </div>
  
            <div className="flex flex-col md:flex-row gap-1">
            For inquiries or complaints, contact:
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
  