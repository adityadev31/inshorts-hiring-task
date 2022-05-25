import './table.css';

const Table = ({data=[]}) => {

  const dataList = (
    data.map((cases) => (
      <tr key={cases.sno}>
        <td>{cases.sno}</td>
        <td>{cases.state}</td>
        <td>{cases.active}</td>
        <td>{cases.recover}</td>
        <td>{cases.death}</td>
      </tr>
    ))
  );


  return (
    <div className='table-box'>
      <h1>Covid 19 Status (India)</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name of State/UT</th>
            <th>Total Confirmed Cases</th>
            <th>Discharged</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {dataList}
        </tbody>
      </table>
    </div>
  )
}

export default Table