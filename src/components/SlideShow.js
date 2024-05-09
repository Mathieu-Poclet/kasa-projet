import "../styles/slideShow.scss"

import Gallery from "./Gallery"

function SlideShow({datas, setDatas}) {

    // datas.map((data) => (
    //     console.log(data.title)
    // ))  

    return (
        <Gallery datas={datas} setDatas={setDatas}/>
    )
}

export default SlideShow