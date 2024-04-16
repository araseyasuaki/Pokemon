import AreaSet from "@/app/parts/areaset"

export default function Hisui() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={1} lastNumber={200}/>
      </section>
    </>
  )
}