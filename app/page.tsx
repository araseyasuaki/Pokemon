'use client'

import { useState, useEffect } from "react";

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
    {/* {pokeDataA ? (
        <img
        src={pokeDataA.sprites.other["official-artwork"].front_default}
        alt={pokeDataA.name}
      />
      ) : (
        <p>aaa</p>
      )} */}
      {pokeDataB ? (
        <p>{pokeDataB.names[0].name}</p>
      ) : (
        <p>aaa</p>
      )}
    </>
  );
}

