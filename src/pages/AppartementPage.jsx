import SlideShow from "../components/SlideShow/SlideShow"
import Property from "../components/Property/Property"
import { useState } from "react"

function AppartementPage() {

  // récupération des datas sélectionnées dans le local Storage
  const dataLocal = localStorage.getItem("dataSelected")
  const[dataSelected] = useState(JSON.parse(dataLocal))

  return (
    <div className="main">
      <SlideShow datas={dataSelected} />
      <Property datas={dataSelected}/>
    </div>
  )
}

export default AppartementPage
