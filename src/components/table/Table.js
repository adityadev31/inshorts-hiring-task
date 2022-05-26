import { useEffect, useState } from 'react';
import './table.css';

const Table = ({ data = [] }) => {

  const [sortInput, setSortInput] = useState("state");

  const [coronaData, setCoronaData] = useState(data);

  useEffect(() => setCoronaData(data), [data])

  const dataList = (
    (coronaData)
    .sort((a, b) => {
      if(sortInput === "state") return a.state - b.state;
      else return Number(a[sortInput]) < Number(b[sortInput]) ? -1 : 1})
    .map((cases, index) => (
      <tr key={(cases.sno)}>
        <td>{(index+1)}</td>
        <td>{cases.state}</td>
        <td>{cases.active}</td>
        <td>{cases.recover}</td>
        <td>{cases.death}</td>
      </tr>
    ))
  );

  const dataSort = (
    <select name="sort-fields" id="sort" onChange={(e) => setSortInput(e.target.value)}>
      <option value="state">Name</option>
      <option value="active">Active Cases</option>
      <option value="recover">Recover Cases</option>
      <option value="death">Death Cases</option>
    </select>
  );

  console.log(sortInput);


  return (
    <div className='table-box'>
      <h1>Covid 19 Status (India)</h1>
      <div className='table-actions'>
        <label htmlFor="sort">SORT</label>
        { dataSort }
      </div>
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