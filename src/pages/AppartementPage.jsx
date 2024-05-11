import SlideShow from "../components/SlideShow"
import { useState } from "react"

function AppartementPage({datas, setDatas}) {

  const dataLocal = localStorage.getItem("newData")
  const[newDatas, setNewDatas] = useState(JSON.parse(dataLocal))

  return (
    <div className="main">
      <SlideShow datas={newDatas} setDatas={setDatas} />
    </div>
  )
}

export default AppartementPage
