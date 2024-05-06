import '../styles/style.scss';
import "../components/Banner";
import Banner from '../components/Banner';
import Card from '../components/Card';


function Home() {
  return (
    <div className='main'>
      <Banner />
      <Card />
    </div>
  )
}

export default Home
