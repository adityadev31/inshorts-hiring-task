import './header.css'

const Header = ({data = {}}) => {
  return (
    <div className='header'>
      <div className="header-item head-1">
        <div className="top">
          <span className="top-head">Active</span>
          <span className="top-subhead">(0.03%)</span>
        </div>
        <div className="down">
          <span className="down-head">{data.current_active}</span>
          <span className="down-subhead">(9 <i className="fa-solid fa-arrow-up"></i>)</span>
        </div>
      </div>
      <div className="header-item head-2">
      <div className="top">
          <span className="top-head">Recover</span>
          <span className="top-subhead">(98.75%)</span>
        </div>
        <div className="down">
          <span className="down-head">{data.current_discharge}</span>
          <span className="down-subhead">(1635 <i className="fa-solid fa-arrow-up"></i>)</span>
        </div>
      </div>
      <div className="header-item head-3">
      <div className="top">
          <span className="top-head">Deaths</span>
          <span className="top-subhead">(1.22%)</span>
        </div>
        <div className="down">
          <span className="down-head">{data.current_deaths}</span>
          <span className="down-subhead">(31 <i className="fa-solid fa-arrow-up"></i>)</span>
        </div>
      </div>
    </div>
  )
}

export default Header