import AreaSet from "@/app/parts/areaset"
import Nyaoha from "@/app/parts/nyaoha"

export default function Parudea() {
  return(
    <>
      <section className="flex flex-wrap">
        <Nyaoha/>
        <AreaSet firstNumber={907} lastNumber={1025}/>
      </section>
    </>
  )
}