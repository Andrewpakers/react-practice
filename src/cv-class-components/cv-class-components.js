import './styles/cv-class-components.css';
import React, { Component } from 'react';
import GeneralInfo from './components/general-info';
// import Education from './components/education';
// import Experience from './components/experience';


export default class CvClassComponents extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className='contentContainerColumn'>
                <div className='container'>
                    <GeneralInfo />
                </div>
            </div>
        );
    }
}