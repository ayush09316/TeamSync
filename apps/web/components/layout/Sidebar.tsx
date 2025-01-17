'use client';
import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircleUserRound } from 'lucide-react';
import { sidebarLink } from '@/constants';

export default function SidebarDemo() {
  const [open, setOpen] = useState(true);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 ">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open && <Logo />}
          <div className="mt-8 flex flex-col gap-4">
            {sidebarLink.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: 'Manu Arora',
              href: '/profile',
              icon: CircleUserRound,
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/documents"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/logo.webp"
        className=" flex-shrink-0"
        width={40}
        height={40}
        alt="Logo"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold text-white whitespace-pre text-lg"
      >
        TeamSync
      </motion.span>
    </Link>
  );
};
