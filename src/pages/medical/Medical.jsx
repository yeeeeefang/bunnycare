import Footer from '../../components/footer/Footer';
import MedicalShow from '../../components/medicalother/MedicalShow';
import './Medical.scss';
// import '../css/Medical.css'
function Medical() {
  return (
    <>
      <div className='show'> 
        <img className='role1' src="./images/role1.svg" alt="" />
        <img className='role2' src="./images/role2.svg" alt="" />
        <MedicalShow />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Medical;