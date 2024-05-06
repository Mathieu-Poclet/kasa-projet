import '../styles/style.scss';
import "../components/Banner";
import Banner from '../components/Banner';
import CardList from '../components/CardList';

function Home() {
  return (
    <div className='main'>
      <Banner />
      <CardList />
      
    </div>
  )
}

export default Home
