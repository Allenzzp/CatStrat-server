import './Summary.scss';
import getPieChartData from '../../helpers/getPieChartData';

import { useState } from 'react';
import { Divider, Paper, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { randomColor } from 'randomcolor'
import PieChart from './PieChart';
import BarChart from './BarChart';

export default function StrategyContainer({ data }) {
  let random = randomColor();

  const [selection, setSelection] = useState('Frequency');
  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <Paper elevation={3} className="paper" style={{ borderRadius: '30px', width: '540px' }}>
      <h1 className="pie__title"> Strategies Used </h1>
      <Divider className="divider" style={{ height: '2px', color: 'black' }} />
      <RadioGroup
        aria-label="Show categories of:"
        name="categories_radio"
        value={selection}
        onChange={handleChange}>

        <div className="chart-buttons">
          <FormControlLabel value="Frequency" control={<Radio />} label="Frequency" />
          <FormControlLabel value="Earnings" control={<Radio />} label="Earnings" />
        </div>

      </RadioGroup>

      { selection === 'Frequency' ? <PieChart data={data} /> : <BarChart data={data} /> }
    </Paper>
  );
}