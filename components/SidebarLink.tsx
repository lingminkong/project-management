"use client";
import Link from 'next/link';
import { Settings, User, Grid, Calendar } from "react-feather";
import React, { FC } from 'react';
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const Icons = { Settings, User, Grid, Calendar };

export type Link = {
  label: string;
  path: string;
  icon: keyof typeof Icons;
}

type Props = {
  link: Link;
}

const SidebarLink: FC<Props> = ({ link }) => {
  const pathname = usePathname();
  const Icon = Icons[link.icon]; 
  return (
    <Link href={link.path} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          pathname === link.path && "stroke-violet-600"
        )}
      />
    </Link>
  )
}

export default SidebarLink;