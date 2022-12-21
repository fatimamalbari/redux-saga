import * as type from '../types';

export const fulfilledWeather = payload => ({
  type: type.GET_WEATHER_SUCCESS,
  payload: payload
});

export const requestWeather = payload => ({
  type: type.GET_WEATHER_REQUESTED,
  payload: payload
})

export const failedWeather = payload => ({
  type: type.GET_WEATHER_FAILED,
  payload: payload
})

export const fulfilledWeatherSearch = payload => ({
  type: type.GET_SEARCH_WEATHER_SUCCESS,
  payload: payload
});

export const requestWeatherSearch = payload => ({
  type: type.GET_SEARCH_WEATHER_REQUESTED,
  payload: payload
})

export const failedWeatherSearch = payload => ({
  type: type.GET_SEARCH_WEATHER_FAILED,
  payload: payload
})