'use client';

import React, { useState, useEffect } from "react";
import Area from "@/app/parts/area"

interface numberProps {
  firstNumber: number,
  lastNumber: number,
  nameData: number[],
}

interface countProps {
  imgnumber: number,
  namenumber: number,
}

export default function AreaSet(props: numberProps) {

  const [ count, setcount ] = useState<countProps[]>([]);
  let forcount = 0;

  useEffect(() => {
    const countData: countProps[] = [];
    for(let i = props.firstNumber; i <= props.lastNumber; i++){
      countData.push({imgnumber: i, namenumber: props.nameData[i - props.firstNumber]})
      forcount++
    }
    setcount(countData)
    console.log(countData)
  },[])

  return(
    <>
      {count.map((data, index)=>(
        <Area key={index} imgnumber={data.imgnumber} namenumber={data.namenumber}/>
      ))}
    </>
  )
}