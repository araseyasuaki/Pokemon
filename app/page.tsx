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
        <Areaset firstNumber={301} lastNumber={400}/>
        <Areaset firstNumber={401} lastNumber={500}/>
        <Areaset firstNumber={501} lastNumber={600}/>
        <Areaset firstNumber={600} lastNumber={700}/>
        <Areaset firstNumber={701} lastNumber={800}/>
        <Areaset firstNumber={801} lastNumber={900}/>
        <Areaset firstNumber={901} lastNumber={1000}/>
        <Areaset firstNumber={1001} lastNumber={1025}/>
      </section>
    </>
  );
}

