import Footer from "../../components/footer/Footer";
import HomeCarousel from "../../components/homeother/HomeCarousel";
import HomeThree from "../../components/homeother/HomeThree";
import HomeTwo from "../../components/homeother/HomeTwo";
// import './Home.scss';
import '../css/Home.css';
function Home() {
    return (
    <>
    <div className="home1">
    <HomeCarousel/>
    </div>
    <div>
      <HomeTwo/>
    </div>
    <div>
      <HomeThree/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
    );
  }
  
  export default Home;