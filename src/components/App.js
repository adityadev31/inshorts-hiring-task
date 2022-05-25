import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import SubHeader from './subheader/SubHeader'
import Table from './table/Table'

const App = () => {

  const [coronaData, setCoronaData] = useState({});

  const fetchTopData = async () => {
    try {
      const res = await axios.get("https://adi-corona-tracker.herokuapp.com/");
      console.log(res.data);
      setCoronaData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTopData();
  }, [])

  return (
    <>
      <Navbar />
      <Header data={coronaData.currentResults} />
      <SubHeader data={coronaData.currentResults} />
      <Table data={coronaData.stateResults} />
      <Footer />
    </>
  )
}

export default App