'use client'

import { useState } from "react";
import clsx from "clsx";
import { MenuBer } from "@/app/parts/menulink";
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
      <section className="fixed top-0 left-0 w-52 h-screen shadow-xl overflow-y-scroll">
        <section className="h-aout overflow-hidden">
          <nav className="flex flex-col my-16">
            <MenuBer link="/" text="全国図鑑"/>
            <button onClick={areaBtn} className="relative py-4 px-6 font-bold hover:bg-blue-100 hover:text-blue-700 transition duration-400 ease-out text-left">地方別
              <span className={clsx("absolute right-6 top-1/2 -translate-y-1/2 transition duration-700 ease-out",{"rotate-90": area === true})}>＞</span>
            </button>
            <section className="relative">
              <div className="absolute ml-7 border-l-2 border-gray-200 flex flex-col h-[560px]">
                {areaData.map((data, index)=>(
                  <MenuBer key={index} link={data.link} text={data.text}/>
                ))}
                <div className={clsx("absolute bottom-0 right-0 w-[146px] transition-height bg-white duration-700 ease-out", {"h-0": area === true, "h-[560px]": area === false})}></div>
              </div>
              <div className={clsx("transition-height duration-700 ease-out", {"h-[560px]": area === true, "h-0": area === false})}></div>
            </section>
            <div className="z-10 flex flex-col">
              <MenuBer link="mega" text="メガシンカ"/>
              <MenuBer link="max" text="キョダイマックス"/>
            </div>
          </nav>
        </section>
      </section>
    );
  }