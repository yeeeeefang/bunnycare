import HomeCarousel from "../../components/homeother/HomeCarousel";
import HomeTwo from "../../components/homeother/HomeTwo";
import './Home.scss';
// import '../css/Home.css';
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