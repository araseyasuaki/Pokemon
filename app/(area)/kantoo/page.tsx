'use client';

import React, { useState, useEffect } from "react";

interface PokemonData {
  img: string;
  name: string;
  names: string;
}

export default function Kantoo() {
  const [pokeData, setPokeData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempPokeData: PokemonData[] = [];
        for (let i = 1; i <= 50; i++) {
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
      <main className="inline-block">
        {pokeData.length > 0 ? (
          <section className="flex flex-wrap justify-start">
            {pokeData.map((data, index) => (
              <section className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" key={index}>
                <div className="border-2 border-gray-200 rounded-xl w-[90%] p-4 mx-auto my-2.5">
                  <img src={data.img} alt={data.name}/>
                  <p className="h-8 pt-4">{data.names}</p>
                </div>
              </section>
            ))}
          </section>
        ) : (
          <section>
            <section>
              <img src="" alt="" />
              <p></p>
            </section>
          </section>
        )}
      </main>
    </>
  );
}