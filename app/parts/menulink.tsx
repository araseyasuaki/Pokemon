'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface menuBerProps {
  link: string,
  text: string,
}

export function MenuBer(props: menuBerProps) {

  const pathname = usePathname();

  return(
    <Link className={clsx("h-14 py-5 px-6 relative font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out",
    {"a after:absolute after:w-2 after:h-2 after:rounded-xl after:bg-blue-700 after:left-2.5 after:top-1/2 after:-translate-y-1/2"
    : pathname === `${props.link}` || pathname === `/${props.link}`
    })} href={props.link}>
      {props.text}
    </Link>
  )
}