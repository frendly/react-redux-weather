import React from "react";
import { connect } from "react-redux";

import DashboardItem from "../../components/DashboardItem/DashboardItem";
import { deleteWeather } from "../../actions";
import "./Dashboard.css";

const Dashboard = ({ store, dispatch }) => {
  const handleRemove = id => dispatch(deleteWeather(id));
  const items = store.map((item, index) => (
    <DashboardItem key={index} {...item} handleRemove={handleRemove} />
  ));
  return (
    <section className="Dashboard">
      <ul className="Dashboard-list">{items}</ul>
    </section>
  );
};

export default connect(state => ({
  store: state.dashboard.filter(item => item.temperature >= state.filter)
}))(Dashboard);
