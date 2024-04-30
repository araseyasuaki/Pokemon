import AreaSet from "@/app/parts/areaset"

export default function Houen() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={252} lastNumber={267}/>
        <AreaSet firstNumber={268} lastNumber={386}/>
      </section>
    </>
  )
}