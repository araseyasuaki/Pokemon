'use client'

import { useState, useEffect } from "react";

// interface resFlA {
//   sprites: { other: { 'official-artwork': { front_default: string}} },
//   name: string,
// }
// interface resFlB {
//   names: { name: string }[],
// }

export default function Kantoo() {

  const [ pokeDataA, setPokeDataA ] = useState(['']);
  const [ pokeDataB, setPokeDataB ] = useState(['']);
  let resData: string[] = [];

  useEffect(()=>{
    const fetchData = async () => {
      try{
        for( let i = 1; i <= 3; i ++){
          const resa = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const resb = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
          const dataA = await resa.json();
          const dataB = await resb.json();
          resData.push(dataA.sprites.other["official-artwork"].front_default);
          console.log(resData[3])
        }
      }catch (error){
        console.error('Error fetching Pokemon data', error);
      }
    }
    fetchData();
    setPokeDataA(resData);
  },[])

  return (
    <>

      <main className="flex flex-col text-left">
        {/* {pokeDataA ? (
          <img src={pokeDataA.sprites.other["official-artwork"].front_default} width={180} height={180} alt={pokeDataA.name}/>
        ) : (
          <p>aaa</p>
        )}
        {pokeDataB ? (
          <p>{pokeDataB.names[0].name}</p>
        ) : (
          <p>aaa</p>
        )} */}
        a
        {/* <img src={setPokeDataA[0]} alt="a" /> */}
      </main>

    </>
  );
}

