import React from 'react'
import ManagementInfo from '../(landingPage)/managementInfo/managementInfoSection'
import FaqCard from '../(landingPage)/Faq/faqSection'
import ProductCard from './productCard'


const CORE_PRODUCTS = [
  {
    id: 'Data_Management',
    icon: '/icons/Data management.svg',
    image: '/images/image 25.png',
    title: 'Data Management',
    subText: 'Data that works as hard a you do.',
    para1: 'GridFlex Data Management is built to simplify the most complex part of your operations — keeping meters, customers, and transactions perfectly in sync.',
    para2: 'From the very first step, onboarding is effortless. Add new meters and customers in minutes, allocate them to the right business hub instantly, and never worry about duplicates again. Everything is connected, everything is where it should be.',
    subTitle: 'With GridFlex, you can:',
    subList: [
      'Track meter-to-customer connections, ensuring every link is correct and up to date.',
      'Allocate seamlessly to business hubs, keeping operations organized and traceable at all times.',
      'Assign meters to customers effortlessly, without repetitive data entry or system clutter.',
      'Manage debit and credit balances with complete accuracy, so no transaction slips through the cracks.'
    ],
    paraEnd: 'This isn’t just data storage, it’s data you can trust. Every detail is secure, searchable, and ready when you need it, so your team spends less time managing and more time growing. ',
    para3: 'With GridFlex, data stops being scattered information and becomes the engine that drives your business forward.',
  }, 
  {
    id: 'Meter_Management',
    icon: '/icons/Meter Management.svg',
    image: '/images/image 22.png',
    title: 'Meter Management',
    subText: 'Smart Control, Simplified',
    para1: 'Meter Management is the heartbeat of GridFlex’s ecosystem, the control center where meters, customers, and operations work in perfect sync. It goes beyond record-keeping, ensuring every meter is correctly linked, monitored, and managed for smooth, bottleneck-free operations.',
    para2: 'With features like virtual meter support, you can manage customers without physical meters, track their activity, and bill them accurately at month’s end. ',
    subTitle: 'Whether you’re managing thousands of meters or starting to scale, GridFlex’s Meter Management keeps operations organized, transparent, and ready for growth.',
    subList: [
      'Seamless Onboarding – Onboard meters and customers with minimal effort, reducing errors and speeding up deployment.',
      'Virtual Meter Capability – Manage customers without meters while still tracking usage and billing accurately.',
      'Full Visibility – Track meter-to-customer connections, debits, credits, and status updates all in one central dashboard.'
    ],
    paraEnd: 'With GridFlex Meter Management, your operations stay sharp and effortless, leaving you free to focus on powering communities, not paperwork.',
  },
  {
    id: 'Vending_Platform',
    icon: '/icons/Vending.svg',
    image: '/images/image 26.png',
    title: 'Vending Platform',
    subText: 'Fast, Reliable & Always On',
    para1: ' The Vending Platform is where revenue meets reliability. It’s the engine that powers every transaction, ensuring your customers can buy electricity anytime, anywhere — without delays or disruptions. Designed for speed and accuracy, it eliminates the headaches of manual vending while giving you full control over your sales operations.',
    para2: 'Whether you’re processing hundreds or thousands of transactions daily, the Vending Platform keeps your system running smoothly, ensuring customers get their tokens instantly and your business stays ahead.',
    subTitle: 'With advanced features like flexible tariff setups, multiple payment integrations, and real-time reporting, you can scale your vending operations effortlessly while maintaining transparency and trust.',
    subList: [
      '24/7 Instant Vending – Process token purchases around the clock with zero downtime.',
      'Multiple Payment Channels – Support for bank transfers, POS, mobile wallets, and more, so customers can pay their way.',
      'Automated Token Delivery – Generate and send tokens instantly to customers via SMS, email, or print.',
    ],
    paraEnd: 'With GridFlex’s Vending Platform, every sale is fast, every payment is secure, and every customer leaves satisfied.',
  },
  {
    id: 'Billing_Platform',
    icon: '/icons/_ui-credit-card-02.svg',
    image: '/images/image 27.png',
    title: 'Billing Platform ',
    subText: 'Powering Clarity, Connection & Control',
    para1: 'The Billing Platform is where data turns into revenue. It automates the process of generating and delivering bills, ensuring every customer gets accurate statements on time, every time. No more chasing numbers or manually calculating balances, the system does it all for you, so you can focus on growing your business.',
    para2: ' With tariff-based calculations, and real-time adjustments, the platform keeps your revenue collection consistent and predictable. Customers benefit from clear, easy-to-understand bills, while you enjoy a streamlined process that reduces errors and speeds up payment collection.',
    subTitle: ' What it offers:',
    subList: [
      'Tariff-Based Calculations – Apply correct rates for different categories without manual intervention.',
      'Feeder Consumption Distribution – Calculate total feeder usage and intelligently split it among virtual customers for accurate billing.',
      'Real-Time Updates – Instantly reflect payments, adjustments on customer accounts.'
    ],
    paraEnd: 'With GridFlex’s Billing Platform, every bill is accurate, every cycle is on time, and every payment is easier to collect.',
  },
  {
    id: 'Hes_Headend',
    icon: '/icons/HES.svg',
    image: '/images/image 28.png',
    title: 'Head-end System ',
    subText: 'Smart meter control at your fingertips.',
    para1: ' The Head-End System (HES) is your command center for smart meters. It communicates directly with meters in the field, collecting data, executing commands, and keeping your network running at peak performance.',
    para2: 'From configuring sync intervals to performing remote actions, HES gives you full control without the need for site visits. It ensures your meters are always up-to-date, secure, and delivering the insights you need to make data-driven decisions.',
    subTitle: ' What it offers:',
    subList: [
      'Real-Time Meter Communication – Monitor and manage meters instantly from a central dashboard.',
      'Remote Commands – Perform actions like disconnect, reconnect, and configuration changes without physical access.',
      'Scheduled Syncs – Set automated intervals for meters to send data, ensuring timely updates.',
    ],
    paraEnd: 'With GridFlex’s HES, every meter is just a click away, saving you time, cutting costs, and keeping your operations under control.',
  },
]

const page = () => {
  return (
    <div>
      <div className='flex justify-center mt-6 text-white text-3xl md:text-5xl font-medium'>
        Core Products
      </div>

      <div className="bg-white flex-1 mt-10 pb-20">
        <div className='px-6 md:px-20 py-10 flex flex-col gap-4 font-light text-gray-600 '>
          <p>
            GridFlex is an energy management software proudly built by <span className='text-[var(--primary)] font-medium'>MEMMCOL</span> , a forward-thinking provider of sustainable technology solutions across energy, utilities, and digital infrastructure.
          </p>
          <p>
            It is a next-generation platform designed to simplify how DisCos and estates monitor, and manage electricity. With seamless prepaid and postpaid systems, service billing, and smart meter integration, GridFlex ensures transparent billing, effortless vending, and efficient usage tracking.
          </p>
          <p>
            Backed by over 30 years of meter manufacturing experience and extensive research into the toughest challenges of data management, billing, vending, and unmetered processes, we know exactly where the gaps are and GridFlex was built to close them.
          </p>
          That’s why GridFlex delivers the future of energy management: reliable, transparent, and built for you.
        </div>

        <div>
          {CORE_PRODUCTS.map((product,index) => (
            <div id={product.id} key={index}>
            <ProductCard
            id={product.id}
             icon={product.icon}
              para1={product.para1} 
              para2={product.para2} 
              title={product.title}
               subText={product.subText}
                subTitle={product.subTitle}
                 subList={product.subList} 
                 paraEnd={product.paraEnd} 
                 para3={product.para3}
                 imageSrc={product.image}/>
            </div>
          ))}
        </div>

        <div>
          <ManagementInfo bgColor={"[var(--primary)]"} circleColor={"white"} />
        </div>
        <div>
          <FaqCard bgColor={"white"} text={"black"} />
        </div>
      </div>
    </div>
  )
}

export default page
