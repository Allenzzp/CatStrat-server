import './StrategyInfo.scss';
import Strategy from './Strategy';
import AddStrategy from './AddStrategy';
import useVisualMode from './useVisualMode';
import { useState, useEffect } from 'react';
import WriteStrategy from './WriteStrategy';
import Axios from 'axios';

export default function StrategyInfo({ loginUserID }) {

  const userID = localStorage.getItem('userID')
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [creation, setCreation] = useState(false);

  // let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`/strategy/${userID}`)
    if (userID) {
      console.log('userID', userID)
      Axios.get(`/strategy/${userID}`)
        .then((res) => {
          console.log('response', res.data)
          setData(res.data)
        })
    } else {
      // navigate("/");
    }
  }, [loginUserID, creation]);


  // create strategy
  function create(name, description) {
    Axios.post('/strategy/', {
      userID,
      name,
      description
    })
      .then((data) => {
        setName('');
        setDescription('');
        setShowForm(false);
        setCreation(!creation)
        // back();
        console.log('post request', data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }    


  // // reset the input data and transition back to the previous mode
  function reset() {
    setName('');
    setDescription('');
    setShowForm(false);
  }

  const parsedStrategies = data.map((i) =>
    <Strategy
      key={i.id}
      id={i.id}
      userID={userID}
      reset={reset}
      create={create}
      creation={creation}
      setCreation={setCreation}
      name={i.strategy_name}
      description={i.description}
      setName={setName}
      setDescription={setDescription}
      type={i.custom === true ? 'Custom' : 'Standard'}
    />
  );



  return (
    <section className="full-container">
      <div className="strategies">
        <h1>Strategies Explained</h1>
        <ul>{parsedStrategies}</ul>
        {showForm ? <ul><WriteStrategy
          type={'Custom'}
          name={name}
          description={description}
          setName={setName}
          setDescription={setDescription}
          setShowForm={setShowForm}
          setCreation={setCreation}
          save={create}
          cancel={reset}
        /> </ul> : <ul><AddStrategy onClick={() => setShowForm(true)} /></ul>}
      </div>
    </section>
  );
}