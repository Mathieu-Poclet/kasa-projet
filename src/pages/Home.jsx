import '../styles/style.scss';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import plage from "../assets/plage.png"

// function Home() {
//   return (
//     <div className='main'>
//       <div className='bannerHome'>
//         <Banner photo={plage} opacity={"home"} />
//         <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>
//       </div>
//       <CardList />
      
//     </div>
//   )
// }

// export default Home


// import { useState } from 'react';
// import Datas from "../datas/datas.json";


function Home({datas, setDatas}) {


  

  return (
    <div className='main'>
      <div className='bannerHome'>
        <Banner photo={plage} opacity={"home"} />
        <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>
      </div>
      <CardList datas={datas} setDatas={setDatas} />
      
    </div>
  )
}

export default Home