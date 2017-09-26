export const addWeather = city => ({
  type: 'ADD_WEATHER',
  city: city
});

export const deleteWeather = id => ({ 
  type: 'DELETE_WEATHER',
  id 
});

export const filterWeather = value => ({
  type: 'FILTER_WEATHER',
  filter: value 
});