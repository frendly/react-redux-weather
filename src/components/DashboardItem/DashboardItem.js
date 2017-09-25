import React from 'react';
import './DashboardItem.css';

const DashboardItem = ({ name, temperature, handleRemove, id, wind, pressure, icon }) => {
  const img = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <li className='DashboardItem'>
      <div>{name}</div>
      <div>{temperature > 0 ? '+' : ''} {temperature}</div>
      <div>{wind ? `Ветер: ${wind} м/с` : ''}</div>
      <div>{pressure ? `Давление: ${pressure} мм` : ''}</div>
      <div>{icon ? <img src={img} alt='' /> : ''}</div>
      <button onClick={() => handleRemove(id)}>✕</button>
    </li>
  );
}

export default DashboardItem;