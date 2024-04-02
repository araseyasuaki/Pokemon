'use client'

import { useState, useEffect } from "react";
import Kantoo from "@/app/(area)/kantoo/page";
import Areaset from "@/app/parts/areaset";
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
        <Areaset firstNumber={1} lastNumber={100}/>
        <Areaset firstNumber={101} lastNumber={200}/>
        <Areaset firstNumber={201} lastNumber={300}/>
      </section>
    </>
  );
}

