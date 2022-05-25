import './subheader.css';

const SubHeader = ({data={}}) => {
  return (
    <div className='subheader'>
      <div className="subheader-box">
        <span className="subheader-data data-1">Total Vaccination: </span>
        <span className="subheader-data data-2">{data.total_vaccinations}</span>
        <span className="subheader-data data-3">(18.32% <i className="fa-solid fa-arrow-up"></i>)</span>
      </div>
    </div>
  )
}

export default SubHeader