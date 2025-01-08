import HomeCarousel from "../../components/other/HomeCarousel";
import HomeTwo from "../../components/other/HomeTwo";
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