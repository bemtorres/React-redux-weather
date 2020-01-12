import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';  
import LocationList from './../components/LocationList';

class LocationListContainer  extends Component {

    handleSelectedLocation = city =>{
        console.log('handleSelectedLocation 2'); 
        this.props.dispatchSetCity(city); //funcion para que nuestro componente tenga una propiedad
    }

    render() {
        return (
            <div>
                <LocationList cities={this.props.cities} 
                    onSelectedLocation={this.handleSelectedLocation}></LocationList>    
            </div>  
        )
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};


const mapDispacthToProps = dispatch => (
    {
      dispatchSetCity: value => dispatch(setCity(value))
    }
  );

// export default ;
export default connect(null,mapDispacthToProps)(LocationListContainer) ;