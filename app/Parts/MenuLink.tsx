import Link from "next/link";

interface MenuBer {
  link: string,
  text: string,
}

export function MenuBer(props: MenuBer) {
  return(
    <Link className="py-4 px-6 font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out" href={props.link}>
      {props.text}
    </Link>
  )
}