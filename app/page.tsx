'use client'

import { useState, useEffect } from "react";
import Areaset from "@/app/parts/areaset";

export default function Home() {

  const [ resCount, setresCount ] = useState<number>(0);

  useEffect(()=>{

    const countInterval = setInterval(()=>{
      setresCount(resCount => resCount + 1);
      console.log(setresCount)
    }, 1000);

    setTimeout(() => {
      clearInterval(countInterval);
    }, 11000);

    return () => clearInterval(countInterval)

  },[])

  return (
    <>
      <section className="flex flex-wrap">
        <Areaset firstNumber={1} lastNumber={30}/>
        {resCount >= 1 && (
          <Areaset firstNumber={31} lastNumber={100}/>
        )}
        {resCount >= 3 && (
          <Areaset firstNumber={101} lastNumber={300}/>
        )}
        {resCount >= 5 && (
          <Areaset firstNumber={301} lastNumber={500}/>
        )}
        {resCount >= 7 && (
          <Areaset firstNumber={501} lastNumber={700}/>
        )}
        {resCount >= 9 && (
          <Areaset firstNumber={701} lastNumber={900}/>
        )}
        {resCount >= 11 && (
          <Areaset firstNumber={901} lastNumber={1025}/>
        )}
      </section>
    </>
  );
}