import React, { Component } from 'react';
import styles from './Device.module.css';
import image from './analizerNati.png';



class Device extends Component {
    render() {
        return (

            <div className={styles.device}>
                <div className={styles.device__description}>
                    <img src={image} alt="AnalyzerImage" className={styles.device__image}/>
                    <h2 className={styles.deviceBold}>Serial number: {this.props.sn}</h2>
                    <h2>Last activity: {this.props.lastActive}</h2>
                    <div className={styles.device__price}>Lens version: {this.props.lensVersion}</div>
                </div>
                <br />
            </div>
        );
    }
}

export default Device;