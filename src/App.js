import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper, Toolbar, AppBar, IconButton, CircularProgress } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';
import LocationListContainer from './containers/LocationListContainer';
import { CITIES } from './constants';

import './app.css';

class App extends Component {

  constructor(){
    super();
    this.state = {city:null};   
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
                <LocationListContainer cities={CITIES} />    
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


export default App;
