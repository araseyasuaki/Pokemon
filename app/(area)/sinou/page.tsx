import AreaSet from "@/app/parts/areaset"

export default function Sinou() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={387} lastNumber={402}/>
        <AreaSet firstNumber={403} lastNumber={493}/>
      </section>
    </>
  )
}