import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AlertCard from './AlertCard'

class Alerts extends Component {

    render() {
        return (
            <div className="notifications">
                { this.props.alerts.map(({ type, message }, index) => <AlertCard type={type} message={message} key={index} />) }
            </div>
        );
    }
}

Alerts.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    alerts: state.notifications.alerts
})

export default connect(mapStateToProps)(Alerts);
