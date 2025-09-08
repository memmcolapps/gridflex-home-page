'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <div className='font-extralight bg-[var(--primary)] text-white px-4 sm:px-8 md:px-20 py-5'>
      <div className='flex mt-4 md:mt-0  flex-col gap-20 md:gap-10'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-10'>
          <div className='flex flex-col gap-2'>
            <div>
              <Image
                src="/icons/gridflex-logo.svg"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div>
              Unified access, Unlimited utility possibilities
            </div>
          </div>

          <div className='flex flex-row justify-center items-start md:pr-10 sm:items-center gap-10 sm:gap-6 md:gap-20'>
            <div className="flex flex-col gap-4">
              <div className='font-normal text-lg sm:text-2xl'>Contact</div>
              <Link target='_blank' href={'https://memmcol.com'} className='text-sm sm:text-base'>
                gridflex@memmcol.com
              </Link>
              <Link href="tel:+2348123456789" className='text-sm sm:text-base'>
                +234 812 345 6789
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className='font-normal text-lg sm:text-2xl'>Policies</div>
              <div className='text-sm sm:text-base'>
                <Link className='flex flex-row gap-1 ' target='_blank' href={'/privacyPolicy'}>
                  Privacy Policy
                  <ArrowUpRight strokeWidth={1} />
                </Link>
              </div>
              <div className='text-sm sm:text-base'>
                <Link className='flex flex-row gap-1 ' target='_blank' href={'/termsOfUse'}>
                  Terms of Use
                  <ArrowUpRight strokeWidth={1} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className='flex flex-col-reverse md:flex-row justify-between md:items-center gap-2 md:gap-0'>
          <div className='text-sm sm:text-base'>
            © 2025, Powered by MEMMCOL. All rights reserved.
          </div>
          <div>
          </div>
          <div className='flex flex-row gap-4 mb-2 md:mb-0'>
            <Image src={'/icons/twitter logo.svg'} alt={'X'} width={20} height={20} />
            <Image src={'/icons/whatsapp logo.svg'} alt={'Whatsapp'} width={20} height={20} />
            <Image src={'/icons/instagram logo.svg'} alt={'Instagram'} width={20} height={20} />
            <Image src={'/icons/Linkedin logo.svg'} alt={'LinkedIn'} width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
