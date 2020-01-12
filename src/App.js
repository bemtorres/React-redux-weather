import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper, Toolbar, AppBar, IconButton } from '@material-ui/core';
import LocationListContainer from './containers/LocationListContainer';
import { CITIES } from './constants';

import './app.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

class App extends Component {
  render(){
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
                    <ForecastExtendedContainer /> 
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
