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

    const [ area, setArea ] = useState(true);
    const areaBtn = () => {
      setArea(!area);
    }
    console.log(area)

    return (
      <nav className="fixed top-0 left-0 h-screen w-48 shadow-xl overflow-y-scroll">
        <section className="flex flex-col justify-center my-16">
            <MenuBer link="zenkoku" text="全国図鑑"/>

            <p onClick={areaBtn} className="py-4 px-7 font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out">
              地方別
            </p>
            <div className={clsx("flex flex-col ml-7 border-l-2 border-gray-200 mb-100",{"hidden": area === true,})}>
              {areaData.map((data, index)=>(
                <MenuBer key={index} link={data.link} text={data.text}/>
              ))}
            </div>

            <MenuBer link="megasinka" text="メガシンカ"/>
            <MenuBer link="kyodaimax" text="キョダイマックス"/>
        </section>
      </nav>
    );
  }