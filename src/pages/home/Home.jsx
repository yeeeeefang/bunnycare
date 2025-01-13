import HomeCarousel from "../../components/homeother/HomeCarousel";
import HomeTwo from "../../components/homeother/HomeTwo";
import './Home.scss';
function Home() {
    return (
    <>
    <div className="home1">
    <HomeCarousel/>
    </div>
    <div>
      <HomeTwo/>
    </div>
    </>
    );
  }
  
  export default Home;