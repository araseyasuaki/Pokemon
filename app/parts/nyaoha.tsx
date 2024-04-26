'use client';

import React, { useState, useEffect } from "react";

interface pokemonData {
  img: string;
  name: string;
  names: string;
}

export default function Kantoo() {

  const [ pokeData, setPokeData ] = useState<pokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempPokeData: pokemonData[] = [];
        const resA = await fetch("https://pokeapi.co/api/v2/pokemon/906");
        const resB = await fetch("https://pokeapi.co/api/v2/pokemon-species/906");
        const dataA = await resA.json();
        const dataB = await resB.json();
        tempPokeData.push({
          img: dataA.sprites.other["official-artwork"].front_default,
          name: dataA.name,
          names: dataB.names[1].name
        });
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
              <section key={index} className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                <div className="w-[90%] m-auto py-4 border-2 border-gray-200 rounded-xl my-4 px-4">
                  <div className="aspect-square">
                    <img className="aspect-square" src={data.img} alt={data.name}/>
                  </div>
                  <div className="h-8 pt-4">{data.names}</div>
                </div>
              </section>
            ))}
          </>
        ) : (
          <>
            <section className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
              <div className="w-[90%] m-auto py-4 border-2 border-gray-200 rounded-xl my-4 px-4">
                <div className="aspect-square bg-gray-100"></div>
                <div className="h-8 pt-4"></div>
              </div>
            </section>
          </>
        )}
      </>
    </>
  );
}