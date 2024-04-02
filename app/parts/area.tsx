'use client';

import React, { useState, useEffect } from "react";

interface PokemonData {
  img: string;
  name: string;
  names: string;
}

interface apiConpProps {
  firstNumber: number,
  lastNumber: number,
}

export default function Kantoo(props: apiConpProps) {
  const [pokeData, setPokeData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempPokeData: PokemonData[] = [];
        for (let i = props.firstNumber; i <= props.lastNumber; i++) {
          const resA = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const resB = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
          const dataA = await resA.json();
          const dataB = await resB.json();
          tempPokeData.push({
            img: dataA.sprites.other["official-artwork"].front_default,
            name: dataA.name,
            names: dataB.names[0].name
          });
        }
        setPokeData(tempPokeData);
      } catch (error) {
        console.error('Error fetching Pokemon data', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <>
        {pokeData.length > 0 ? (
          <>
            {pokeData.map((data, index) => (
              <section className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" key={index}>
                <div className="w-[90%] m-auto py-4 border-2 border-gray-200 rounded-xl my-4 px-4">
                  <img src={data.img} alt={data.name}/>
                  <p className="h-8 pt-4">{data.names}</p>
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            <h1>loding...</h1>
          </>
        )}
      </>
    </>
  );
}