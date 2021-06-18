import React, { Component } from 'react';
import Device from './Device/Device';
import styles from './Devices.module.css';


class Devices extends Component {

    render() {
        const devices = this.props.devices.map((device, index) => {
            return (
            <Device 
            key={device.id} 
            sn={device.sn} 
            lastActive={device.lastActive} 
            lensVersion={device.lensVersion} 
            />);
        });

        return (
            <div className={styles.devices   }>{devices}</div>
        )
    }
}

export default Devices;
