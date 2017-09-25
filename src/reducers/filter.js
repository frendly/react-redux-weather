const initialState = 5;

const filterWeather = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_WEATHER':
      return action.filter;
    default:
      return state;
  }
}

export default filterWeather;