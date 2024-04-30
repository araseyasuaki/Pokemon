import AreaSet from "@/app/parts/areaset"

export default function Kantoo() {

  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={1} lastNumber={16}/>
        <AreaSet firstNumber={17} lastNumber={151}/>
      </section>
    </>
  )
}