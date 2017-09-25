export const addWeather = (city) => ({
  type: 'ADD_WEATHER',
  name: city.label,
  temperature: city.temperature,
  wind: city.wind,
  pressure: city.pressure,
  icon: city.icon,
  apiId: city.id
});

export const deleteWeather = id => ({ 
  type: 'DELETE_WEATHER',
  id 
});

export const filterWeather = value => ({
  type: 'FILTER_WEATHER',
  filter: value 
});