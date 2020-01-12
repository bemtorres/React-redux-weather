import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';

export class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city1 &&
            <ForecastExtended city={this.props.city1 } /> 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city1 : PropTypes.string.isRequired,
};

const mapStateToProps = state =>({ city1: state.city });  //añade a las propededaes

// const mapStateToProps = ({city}) =>({ city });  //estructuring

export default connect(mapStateToProps,null)(ForecastExtendedContainer);
