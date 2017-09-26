import React from 'react';
import './DashboardItem.css';

const DashboardItem = ({ name, temperature, handleRemove, id, wind, pressure, icon }) => {
  const img = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <li className='DashboardItem'>
      <div><strong>{name}</strong></div>
      <div className="DashboardItem__weather">
        <span>{icon ? <img src={img} alt='' /> : ''}</span>
        <span>{temperature > 0 ? '+' : ''} {temperature} °C</span>
      </div>
      <div className="DashboardItem__description">{wind ? `Ветер: ${wind} м/с` : ''}</div>
      <div className="DashboardItem__description">{pressure ? `Давление: ${pressure} мм` : ''}</div>
      <button className="DashboardItem__close" onClick={() => handleRemove(id)}>✕</button>
    </li>
  );
}

export default DashboardItem;