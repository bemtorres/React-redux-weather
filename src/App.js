import React, {Component} from 'react';
import { connect } from 'react-redux';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper, Toolbar, AppBar, IconButton, CircularProgress } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';  
import { CITIES } from './constants';
import PropTypes from 'prop-types';
import './app.css';


class App extends Component {

  constructor(){
    super();
    this.state = {city:null};   
  }


  handleSelectedLocation = city =>{
    this.setState({city});

    console.log(city);
    
    this.props.dispatchSetCity(city); //funcion para que nuestro componente tenga una propiedad
  }

  render(){
      // const {city} = this.state;
      return (
        <div>
          <Grid>
            <Row>
              <Col xs={12} md={12}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    El Tiempo
                  </IconButton>
                </Toolbar>
              </AppBar>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList cities={CITIES} onSelectedLocation={this.handleSelectedLocation}></LocationList>    
              </Col>   
              <Col xs={12} md={6}>
                <Paper elevation={4} />
                  <div className='detail'>
                  { this.state.city ? <ForecastExtended city={this.state.city} /> : 
                    <div>
                      <h2 className='forecast-title'>Esperando...</h2>
                      <center>
                        <CircularProgress aling='center' color="secondary" />
                      </center>
                    </div> }
                  </div>
                <Paper />
              </Col>     
            </Row>
          </Grid>        
        </div>
      );
    }
}

App.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
}

const mapDispacthToProps = dispatch => (
  {
    dispatchSetCity: value => dispatch(setCity(value))
  }
);
export default connect(null,mapDispacthToProps)(App) ;
