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
    </>
  );
}