'use client'

import { useState, useEffect } from "react";
import AreaSet from "@/app/parts/areaset";

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
        <AreaSet firstNumber={1} lastNumber={30}/>
        {resCount >= 1 && (
          <AreaSet firstNumber={31} lastNumber={100}/>
        )}
        {resCount >= 2 && (
          <AreaSet firstNumber={101} lastNumber={300}/>
        )}
        {resCount >= 4 && (
          <AreaSet firstNumber={301} lastNumber={500}/>
        )}
        {resCount >= 6 && (
          <AreaSet firstNumber={501} lastNumber={700}/>
        )}
        {resCount >= 8 && (
          <AreaSet firstNumber={701} lastNumber={900}/>
        )}
        {resCount >= 10 && (
          <AreaSet firstNumber={901} lastNumber={1025}/>
        )}
      </section>
    </>
  );
}