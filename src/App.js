import { useState, useEffect } from 'react';
import { SCREEN_1, SCREEN_2, SCREEN_3, SCREEN_4 } from './screens';
import {  } from './tools';
import {  } from './simple_components';
import './styles.css';

export const APP = () => {

    
    return <>
        <div className='centerer'><img alt="" src='logo.svg' className='logo'></img></div>
        <h1>Job application</h1>

        <div className='form_container'>
            <div className='form_content_container'>
                <SCREEN_1/>
            </div>
        </div>

        <div className='footer'>
            <img alt="" className='footer_logo' src='logo.svg'/>
            <div className='footer_text'>
                <h4>Contact Us:</h4>
                <p>Phone:<br/>+1 (407) 486-4206</p>
                <p>E-mail:<br/>contact@eliteglass-services.com</p>
            </div>
        </div>
    </>
}