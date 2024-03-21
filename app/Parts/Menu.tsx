'use client'

import { useState } from "react";
import clsx from "clsx";
import { MenuBer } from "@/app/Parts/MenuLink";

  const areaData = [
    { link: "kantoo", text: "カントー地方" },
    { link: "zyouto", text: "ジョウト地方" },
    { link: "houen", text: "ホウエン地方" },
    { link: "sinou", text: "シンオウ地方" },
    { link: "issyu", text: "イッシュ地方" },
    { link: "karosu", text: "カロス地方" },
    { link: "aroora", text: "アローラ地方" },
    { link: "gararu", text: "ガラル地方" },
    { link: "hisui", text: "ヒスイ地方" },
    { link: "parudea", text: "パルデア地方" },
  ];

  export function Menu() {

    const [ area, setArea ] = useState(false);
    const areaBtn = () => {
      setArea(!area);
    }

    return (
      <nav className="fixed top-0 left-0 h-screen w-52 shadow-xl overflow-y-scroll">
        <section className={clsx("flex flex-col justify-start overflow-hidden",{"h-[784px]": area === true, "h-screen": area === false})}>
          <MenuBer link="zenkoku" text="全国図鑑"/>
          <p onClick={areaBtn} className="py-4 relative px-7 font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out">
            地方別<span className={clsx("absolute right-6 top-1/2 -translate-y-1/2 transition duration-400 ease-out",{"rotate-90": area === true})}>＞</span>
          </p>
          <section className="relative h-0">
            <div className="flex absolute flex-col ml-7 border-l-2 border-gray-200">
              {areaData.map((data, index)=>(
                <MenuBer key={index} link={data.link} text={data.text}/>
              ))}
            </div>
          </section>
          <div className={clsx("relative z-10 bg-white pb-[448px] flex flex-col transition duration-1000",{"translate-y-[560px]": area === true})}>
            <MenuBer link="megasinka" text="メガシンカ"/>
            <MenuBer link="kyodaimax" text="キョダイマックス"/>
          </div>
        </section>
      </nav>
    );
  }