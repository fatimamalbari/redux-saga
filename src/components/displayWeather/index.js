import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Typography, Button, Table, TableHead, TableCell, TableRow, TableBody, Box, Grid } from "@mui/material";
import { requestWeatherSearch } from "../../redux/actions/weatherActions";
import style from './style.css';

const DisplayWeather = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const weatherForecastData = useSelector((state) => state?.weatherReducer.weatherForecast) || [];
  console.log("last 5 searches ===>", weatherForecastData);
  const searchWeatherForecast = weatherForecastData.length >= 1 ? weatherForecastData[0] : null;
  console.log(searchWeatherForecast);

  const handleCityWeather = (e) => {
    setSearch(e.target.value);
  }

  const getWeatherDetails = () => {
    dispatch(requestWeatherSearch(search))
    setSearch('');
  }

  const renderTable = (data) => {
    return (
      <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>City Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Feels Like</TableCell>
            <TableCell align="right">Description </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row?.name}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="right">{row?.sys.country}</TableCell>
              <TableCell align="right">{row?.main?.temp}</TableCell>
              <TableCell align="right">{row?.main?.feels_like}</TableCell>
              <TableCell align="right">{row?.weather[0].description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Fragment>
      <Typography align='center' variant="h5" sx={{marginBottom: '20px'}}> Weather Forecasting </Typography>

      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Input type="text" placeholder="Enter City" onChange={(e) => handleCityWeather(e)} value={search}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "15px"}}>
              <Button variant='outlined'
                      sx={{width: '506px', color: 'black', fontWeight: 'bold', borderColor: 'black'}} type='submit'
                      onClick={getWeatherDetails}>FETCH
                WEATHER DETAILS</Button>
            </div>
          </Grid>

          <Grid item xs={4}>
            {weatherForecastData[0]?.weather[0]?.icon ?
              <img src={`http://openweathermap.org/img/wn/${searchWeatherForecast?.weather[0].icon}@2x.png`}
                   height={100}
                   alt='weather-logo'/> : null}

            <Typography variant="h6">Temperature: {searchWeatherForecast?.main?.temp} </Typography>
            <Typography variant="h6">Feels Like: {searchWeatherForecast?.main?.feels_like} </Typography>
            <Typography variant="h6">Country: {searchWeatherForecast?.sys.country} </Typography>
            <Typography variant="h6">Description: {searchWeatherForecast?.weather[0].description} </Typography>
            <Typography variant="h6">City Name: {searchWeatherForecast?.name} </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography align='center' variant='h6' sx={{marginTop: '10px'}}>Last 5 Searches Record : </Typography>
      {renderTable(weatherForecastData)}
    </Fragment>
  )
}

export default DisplayWeather;