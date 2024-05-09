import SlideShow from "../components/SlideShow"

function AppartementPage({datas, setDatas}) {

  return (
    <div className="main">
      <SlideShow datas={datas} setDatas={setDatas} />
    </div>
  )
}

export default AppartementPage
