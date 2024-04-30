import AreaSet from "@/app/parts/areaset"

export default function Karosu() {
  return(
    <>
      <section className="flex flex-wrap">
        <AreaSet firstNumber={650} lastNumber={665}/>
        <AreaSet firstNumber={666} lastNumber={721}/>
      </section>
    </>
  )
}