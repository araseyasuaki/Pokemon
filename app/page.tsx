// 'use client'

// import { useState, useEffect } from "react";
// import Areaset from "@/app/parts/areaset";
// interface resFl {
//   names: { name: string }[],
// }

// export default function Home() {

//   const [ resCount, setresCount ] = useState<number>(1);

//   return (
//     <>
//       <section className="flex flex-wrap">
//         <Areaset firstNumber={1} lastNumber={100}/>
//         {/* <Areaset firstNumber={101} lastNumber={200}/>
//         <Areaset firstNumber={201} lastNumber={300}/>
//         <Areaset firstNumber={301} lastNumber={400}/>
//         <Areaset firstNumber={401} lastNumber={500}/>
//         <Areaset firstNumber={501} lastNumber={600}/>
//         <Areaset firstNumber={600} lastNumber={700}/>
//         <Areaset firstNumber={701} lastNumber={800}/>
//         <Areaset firstNumber={801} lastNumber={900}/>
//         <Areaset firstNumber={901} lastNumber={1000}/>
//         <Areaset firstNumber={1001} lastNumber={1025}/> */}
//         {resCount < 2 (
//           <p>kita</p>
//         )
//         }
//       </section>
//     </>
//   );
// }

'use client'

import { useState, useEffect } from "react";
import Areaset from "@/app/parts/areaset";

export default function Home() {

  const [ resCount, setresCount ] = useState<number>(1);

  useEffect(()=>{

    const countInterval = setInterval(()=>{
      setresCount(resCount => resCount + 1);
      console.log(setresCount)
    }, 500);

    setTimeout(() => {
      clearInterval(countInterval);
    }, 4000);

    return () => clearInterval(countInterval)

  },[])

  return (
    <>
      <section className="flex flex-wrap">
        {resCount > 0.5 && (
          <>
          <Areaset firstNumber={1} lastNumber={200}/>
          </>
        )}
        {resCount > 1.5 && (
          <>
          <Areaset firstNumber={201} lastNumber={400}/>
          </>
        )}
        {resCount > 2 && (
          <>
          <Areaset firstNumber={401} lastNumber={600}/>
          </>
        )}
        {resCount > 2.5 && (
          <>
          <Areaset firstNumber={601} lastNumber={800}/>
          </>
        )}
        {resCount > 3 && (
          <>
          <Areaset firstNumber={801} lastNumber={1000}/>
          </>
        )}
        {resCount > 3.5 && (
          <>
          <Areaset firstNumber={1001} lastNumber={1025}/>
          </>
        )}
      </section>
    </>
  );
}