import React from 'react';
import { connect } from 'react-redux';
import { filterWeather } from '../../actions';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Range = ({ dashboard, filter, dispatch }) => {
  const max = Math.max(...dashboard.map(o => o.temperature));
  const min = Math.min(...dashboard.map(o => o.temperature));

  const handleChange = (value) => {
    if(filter !== value) {
      dispatch(filterWeather(value));
    }
  };

  return (
    <section className="Range">
      <div>Где сейчас теплее, чем</div>
      <InputRange
        maxValue={max}
        minValue={min}
        value={filter}
        onChange={e => handleChange(e)}
      />
    </section>
  );
}

export default connect(
  state => ({
    dashboard: state.dashboard,
    filter: state.filter
  })
)(Range);
