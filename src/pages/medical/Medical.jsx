import MedicalShow from '../../components/medicalother/MedicalShow';
import './Medical.scss';
// import '../css/Medical.css'
function Medical() {
  return (
    <>
      <h2>這是醫療頁</h2>
      <div className='show'> 
        <MedicalShow />
      </div>
    </>
  );
}

export default Medical;