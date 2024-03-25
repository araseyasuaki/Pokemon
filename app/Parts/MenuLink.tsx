import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface MenuBerProps {
  link: string,
  text: string,
}

export function MenuBer(props: MenuBerProps) {

  const pathname = usePathname();

  return(
    <Link className={clsx("py-4 px-6 relative font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out",{"a after:absolute after:w-2 after:h-2 after:rounded-xl after:bg-blue-700 after:left-2.5 after:top-1/2 after:-translate-y-1/2": pathname === `/${props.link}`})} href={props.link}>
      {props.text}
    </Link>
  )
}