import SlideShow from "../components/SlideShow"


function AppartementPage({datas, setDatas}) {

//   datas.map((data) => (
//     console.log(data.title)
// ))

  return (
    <div className="main">
      <SlideShow datas={datas} setDatas={setDatas} />
    </div>
  )
}

export default AppartementPage
