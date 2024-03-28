// 'use client'

// import { useState, useEffect } from "react";

// export default function Kantoo() {

//   interface resFlA {
//     sprites: {
//       other: {
//         'officia-artwork': {
//           front_default: string
//         }
//       }
//     },
//   }
//   interface resFlB {
//     names: string[],
//   }

//   const [ pokeDataA, setPokeDataA ] = useState([]);
//   const [ pokeDataB, setPokeDataB ] = useState([]);

//   useEffect(()=>{
//     const fetchData = async () => {
//       const resDataA = [];
//       const resDataB = [];
//       try{
//         for( let i = 1; i <= 3; i ++){
//           const resA = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//           const resB = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
//           const dataA = await resA.json();
//           const dataB = await resB.json();
//           resDataA.push(dataA);
//           resDataB.push(dataB);
//         }
//         setPokeDataA(resDataA)
//         setPokeDataB(resDataB)
//       }catch (error){
//         console.error('Error fetching Pokemon data', error);
//       }
//     }
//     fetchData();
//   },[])

//   return (
//     <>

//       <main className="flex flex-col text-left">
//         {pokeDataA ? (
//           <div>
//             {pokeDataA.map((data, index)=>(
//               <p>{data.name}</p>
//             ))}
//           </div>
//         ) : (
//           <p>aaa</p>
//         )}
//       </main>

//     </>
//   );
// }

'use client'

import { useState, useEffect } from "react";

export default function Kantoo() {

  interface resFlA {
    sprites: {
      other: {
        'official-artwork': {
          front_default: string
        }
      }
    },
    name: string
  }
  interface resFlB {
    names: string,
  }

  const [pokeDataA, setPokeDataA] = useState<resFlA[]>([]);
  const [pokeDataB, setPokeDataB] = useState<resFlB[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resDataA: resFlA[] = [];
        const resDataB: resFlB[] = [];
        for (let i = 152; i <= 251; i++) {
          const resA = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const resB = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
          const dataA: resFlA = await resA.json();
          const dataB: resFlB = await resB.json();
          resDataA.push(dataA);
          resDataB.push(dataB);
        }
        setPokeDataA(resDataA);
        setPokeDataB(resDataB);
      } catch (error) {
        console.error('Error fetching Pokemon data', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>

      <main className="flex flex-col text-left">
        {pokeDataA.length > 0 ? (
          <div>
            {pokeDataA.map((data, index) => (
              <p key={index}>{data.name}</p>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>

    </>
  );
}