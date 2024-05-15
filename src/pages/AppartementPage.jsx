import SlideShow from "../components/SlideShow"
import Property from "../components/Property"
import { useState } from "react"

function AppartementPage() {

  const dataLocal = localStorage.getItem("newData")
  const[newDatas] = useState(JSON.parse(dataLocal))

  return (
    <div className="main">
      <SlideShow datas={newDatas} />
      <Property datas={newDatas}/>
    </div>
  )
}

export default AppartementPage
