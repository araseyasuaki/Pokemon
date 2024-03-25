'use client'

import Link from "next/link";
import clsx from "clsx";

interface MenuBerProps {
  link: string,
  text: string,
}

export function MenuBer(props: MenuBerProps) {

  return(
    <Link className="py-4 px-6 relative font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out" href={props.link}>
      {props.text}
    </Link>
  )
}