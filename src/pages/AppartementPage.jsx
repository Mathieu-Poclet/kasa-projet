import SlideShow from "../components/SlideShow/SlideShow"
import Property from "../components/Property/Property"
import { useState } from "react"
import { useParams } from "react-router-dom";
import Error from"../pages/Error";
import datas from "../datas/datas.json"

function AppartementPage() {

  const { id } = useParams()

  const appartement = datas.find(appartement => appartement.id === id)
  
  // récupération des datas sélectionnées dans le local Storage
  const dataLocal = localStorage.getItem("dataSelected")
  const[dataSelected] = useState(JSON.parse(dataLocal))

  if (!appartement) {

    return <Error/>

  } else{

    return (

      <div className="main">
        <SlideShow datas={dataSelected} />
        <Property datas={dataSelected}/>
      </div>
    )
  }
}
export default AppartementPage