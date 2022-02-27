import React from 'react'
import "./comparison.scss"
import Button from '@mui/material/Button';
import PieChart from './PieChartC';
import PieChartS from '../Summary/PieChart';
import { useState, useEffect } from 'react'
import Axios from "axios";
import { useParams } from 'react-router-dom'
import BarChart from './BarChartC';
import LineGraph from './LineGraphC';
import { ToggleButton, radioValue, ButtonGroup } from 'react-bootstrap'

const Comparison = () => {
  const [userData, setUserData] = useState([])
  const [graphData, setGraphData] = useState([]);
  const [graphDataB, setGraphDataB] = useState([]);
  const [compare, setCompare] = useState(true);

  const [showDefault, setShowDefault] = useState(true)
  const [showLineChart, setShowLineChart] = useState(false)
  const [showBarChart, setShowBarChart] = useState(false)

  const userID = localStorage.getItem("userID");
  const user = localStorage.getItem("username");
  const params = useParams();
  const id = params.id;


  useEffect(() => {

    if (userID == id) {
      setCompare(true)

      Axios.get(`/dashboard`, { params: { user_id: userID } })
        .then((all) => {
          setGraphData(all.data)
          console.log("all1", all.data)
        })
        .catch(err => console.log("comparison page", err))
    } else {
      setCompare(false)

      Promise.all([
        Axios.get(`/dashboard`, { params: { user_id: userID } }),
        Axios.get(`/dashboard`, { params: { user_id: id } }),
        Axios.get(`/username/${id}`, { params: { id } }),
      ]).then((all) => {
        console.log("all0", all[0].data)
        setGraphData(all[0].data)
        console.log("all1", all[1].data)
        setGraphDataB(all[1].data)
        console.log("all2", all[2].data)
        setUserData(all[2].data[0])
      }).catch(err => console.log("comparison page", err))

    }

  }, [compare, id]);

  const showPie = () => {
    console.log("clicked")
    setShowDefault(true)
    setShowBarChart(false)
    setShowLineChart(false)
  }

  const showBar = () => {
    console.log("clicked")
    setShowDefault(false)
    setShowBarChart(true)
    setShowLineChart(false)
  }


  const showLine = () => {
    console.log("clicked")
    setShowDefault(false)
    setShowLineChart(true)
    setShowBarChart(false)
  }


  return (
    <div className="comparison-container">
      {compare ?
        <>
          <div className="nocomparison-container">
            <div className="no-compare-txt">
              {`${user}`}
            </div>
            <div className="no-compare-btn">
              <Button id="btn-color" size="small" variant="contained" onClick={showLine}>Line</Button>
              <Button id="btn-color" size="small" variant="contained" onClick={showPie}>Pie</Button>
              <Button id="btn-color" size="small" variant="contained" onClick={showBar}>Bar</Button>
            </div>

            <div className="no-compare-graph">
              {showLineChart ? <div id="line-graph"><LineGraph data={graphData} /></div> : <></>}
              {showDefault ? <PieChart id="graph-chart" data={graphData} /> : <></>}
              {showBarChart ? <BarChart data={graphData} /> : <></>}
            </div>

          </div>
        </>
        :
        <>
          <div className="comparison-container-middle">{`${user} vs ${userData.username}`}</div>
          <div className="comparison-container-bottom">
            <div className="comparison-container-left">
              <div className="a-btn">

                <Button id="btn-color" size="small" className='button-toggle' style={{fontSize:'17px',backgroundColor:'blue', borderRadius:'8px', width:'90px', color:'white', fontWeight:'900'}} variant="primary" onClick={showLine}>Line</Button>
                <Button id="btn-color" size="small" className='button-toggle' style={{backgroundColor:'blue', width:'90px', borderRadius:'8px', color:'white', fontWeight:'900', fontSize:'17px'}}  variant="primary" onClick={showPie}>Pie</Button>
                <Button id="btn-color" size="small" style={{backgroundColor:'blue', color:'white',borderRadius:'8px', width:'90px', fontWeight:'900', fontSize:'17px'}} className='button-toggle' variant="primary" onClick={showBar}>Bar</Button>


              </div>
              <div className="a-graphs">
                {showLineChart ? <div id="line-graph"><LineGraph data={graphData} /></div> : <></>}
                {showDefault ? <PieChart id="graph-chart" data={graphData} /> : <></>}
                {showBarChart ? <BarChart data={graphData} /> : <></>}
              </div>
            </div>
            <div className="comparison-container-right">
              <div className="c-btn">
                {/* <Button id="btn-color" size="small" variant="contained">Line</Button>
            <Button id="btn-color" size="small" variant="contained">Pie</Button>
            <Button id="btn-color" size="small" variant="contained">Bar</Button> */}
              </div>
              <div className="c-graphs">
                {showLineChart ? <div id="line-graph"><LineGraph data={graphDataB} /></div> : <></>}
                {showDefault ? <PieChart id="graph-chart" data={graphDataB} /> : <></>}
                {showBarChart ? <BarChart data={graphDataB} /> : <></>}
              </div>
            </div>
          </div>
        </>}
    </div>
  )
}

export default Comparison;