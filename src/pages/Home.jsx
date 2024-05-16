import plage from "../assets/plage.png"
import Banner from '../components/Banner/Banner'
import CardList from '../components/CardList/CardList'

function Home() {  

  return (
    <div className='main'>
      <div className='bannerHome'>
        <Banner photo={plage} opacity={"home"} />
        <h1 className='bannerTitle'>Chez vous, partout et ailleurs</h1>
      </div>
      <CardList />      
    </div>
  )
}

export default Home