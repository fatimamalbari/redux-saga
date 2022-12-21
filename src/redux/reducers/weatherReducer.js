import * as type from '../types';

const initialState = {
  weatherForecast: [],
  loading: false,
  error: null
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_SEARCH_WEATHER_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_SEARCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherForecast: [action.payload, ...state.weatherForecast.slice(0, 4)]
      }
    case type.GET_SEARCH_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}