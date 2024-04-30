import AreaSet from "@/app/parts/areaset"

export default function Zyouto() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={152} lastNumber={167}/>
        <AreaSet firstNumber={168} lastNumber={250}/>
      </section>
    </>
  )
}