import ExAreaSet from "@/app/parts/exareaset"

export default function Mega() {

  const megaDataA = [
    3,6,6,9,65,
    94,115,127,130,142,
    150,150,181,212,214,
    229,248,257,282,303,
    306,308,310,354,359,
    445,448,460
  ];
  const megaDataB = [
    380,381,260,254,302,
    334,475,531,319,80,
    208,18,362,719,376,
    382,383,384
  ];
  const megaDataC = [
    323,428,373,15
  ];

  return(
    <>
      <section className="flex flex-wrap">
        <ExAreaSet firstNumber={10033} lastNumber={10060} nameData={megaDataA}/>
        <ExAreaSet firstNumber={10062} lastNumber={10079} nameData={megaDataB}/>
        <ExAreaSet firstNumber={10087} lastNumber={10090} nameData={megaDataC}/>
      </section>
    </>
  )
}