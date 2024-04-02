'use client'

import { useState, useEffect } from "react";
import Kantoo from "@/app/(area)/kantoo/page";
import Area from "@/app/parts/area";
interface resFl {
  names: { name: string }[],
}

export default function Home() {

  const [ pokeDataA, setPokeDataA ] = useState("");
  const [ pokeDataB, setPokeDataB ] = useState<resFl>();

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const resa = await fetch('https://pokeapi.co/api/v2/pokemon/6');
        const resb = await fetch('https://pokeapi.co/api/v2/pokemon-species/6');
        const dataa = await resa.json();
        const datab = await resb.json();
        console.log(datab)
        setPokeDataA(dataa);
        setPokeDataB(datab);
      }catch (error){
        console.error('Error fetching Pokemon data', error);
      }
    }
    fetchData();
  },[])

  return (
    <>
      <section className="flex flex-wrap">
        <Area firstNumber={1} lastNumber={50}/>
        <Area firstNumber={51} lastNumber={100}/>
        <Area firstNumber={101} lastNumber={150}/>
        <Area firstNumber={151} lastNumber={200}/>
        <Area firstNumber={201} lastNumber={250}/>
        <Area firstNumber={251} lastNumber={300}/>
      </section>
    </>
  );
}

