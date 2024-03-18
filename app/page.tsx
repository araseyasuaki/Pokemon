'use client'

import { useState, useEffect } from "react";

export default function Home() {

  const [ pokeData, setPokeData ] = useState('')

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/10277');
        const data = await res.json();
        console.log(data)
        setPokeData(data);
      }catch (error){
        console.error('Error fetching Pokemon data', error);
      }
    }
    fetchData();
  },[])

  return (
    <section>

    </section>
  );
}
