'use client';

import React, { useState, useEffect } from "react";
import Area from "@/app/parts/area"

interface numberProps {
  firstNumber: number,
  lastNumber: number,
}

interface countProps {
  number: number,
}

export default function AreaSet(props: numberProps) {

  const [ count, setcount ] = useState<countProps[]>([]);

  useEffect(() => {
    const countData: countProps[] = [];
    for(let i = props.firstNumber; i <= props.lastNumber; i++){
      countData.push({number: i,});
      console.log(countData)
    }
    setcount(countData)
  },[])

  return(
    <>
      {count.map((data, index)=>(
        <Area key={index} number={data.number}/>
      ))}
    </>
  )
}