  import ExAreaSet from "@/app/parts/exareaset"

  export default function Max() {

    const maxData = [
      3,6,9,12,25,
      52,68,94,99,131,
      133,143,569,809,812,
      815,818,823,826,834,
      839,841,842,844,849,
      851,858,861,869,879,
      884,892,892
    ];

    return(
      <>
        <section className="flex flex-wrap">
          <ExAreaSet firstNumber={10195} lastNumber={10227} nameData={maxData}/>
        </section>
      </>
    )
  }