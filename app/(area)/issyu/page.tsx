import AreaSet from "@/app/parts/areaset"

export default function Issyu() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={495} lastNumber={510}/>
        <AreaSet firstNumber={511} lastNumber={648}/>
      </section>
    </>
  )
}