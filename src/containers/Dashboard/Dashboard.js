import React from 'react';
import { connect } from 'react-redux';
import Range from '../Range/Range';

import DashboardItem from '../../components/DashboardItem/DashboardItem';
import { deleteWeather } from '../../actions';
import './Dashboard.css';


const Dashboard = ({store, dispatch}) => {
  const handleRemove = (id) => dispatch(deleteWeather(id));
  const items = store.map((item, index) => <DashboardItem key={index} {...item} handleRemove={handleRemove} />);
  return (
    <div className="Dashboard">
      <Range/>

      <ul className="Dashboard-list">
        {items}
      </ul>
    </div>
  );
}

export default connect(
  state => ({
    store: state.dashboard.filter(item => item.temperature >= state.filter)
  })
)(Dashboard);
