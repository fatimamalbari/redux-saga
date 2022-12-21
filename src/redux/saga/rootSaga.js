import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchWeatherRecords, fetchSearchWeatherRecords } from '../Api';
import { GET_SEARCH_WEATHER_REQUESTED, GET_WEATHER_REQUESTED } from "../types";
import { failedWeather, fulfilledWeatherSearch, failedWeatherSearch } from "../actions/weatherActions";

export function* getAllWeatherRecords(action) {
  try {
    const data = yield call(fetchWeatherRecords);
    // yield put(fulfilledWeather(res));
  } catch (err) {
    yield put(failedWeather(err))
  }
}

export function* getSearchWeatherRecords(action) {
  const {payload} = action;
  try {
    const data = yield fetchSearchWeatherRecords(payload);
    let res = data.data;
    yield put(fulfilledWeatherSearch(res))
  } catch (err) {
    debugger;
    let errorMsg = err;
    yield put(failedWeatherSearch(errorMsg))
    console.log('errr', err)
  }
}

function* getAllWeatherRecord() {
  yield takeEvery(GET_WEATHER_REQUESTED, getAllWeatherRecords);
}

function* getSearchWeatherRecord() {
  yield takeEvery(GET_SEARCH_WEATHER_REQUESTED, getSearchWeatherRecords);
}

export default function* rootSaga() {
  yield all([
    getAllWeatherRecord(),
    getSearchWeatherRecord(),
  ])
};