const initialState = [
  {
    id: 1,
    name: 'Москва',
    temperature: 18
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
    temperature: 12
  }, {
    id: 3,
    name: 'Одесса',
    temperature: 25
  }, {
    id: 4,
    name: 'Минск',
    temperature: -10
  }
];

let id = 4;

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WEATHER':
      return [
        ...state,
        {
          id: ++id,
          name: action.name,
          temperature: action.temperature,
          wind: action.wind,
          pressure: action.pressure,
          icon: action.icon,
          apiId: action.id
        }
      ]
    case 'DELETE_WEATHER':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default dashboard;