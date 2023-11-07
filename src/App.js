import { useState, useEffect } from 'react';
import { SCREEN_1, SCREEN_2, SCREEN_3, SCREEN_4 } from './screens';
import { empty_request_body,
    optional_fields,
    activate_required_fields_message,
    deactivate_required_fields_message,
    active_initial_screen,
    changeScreen,
} from './tools';
import {  } from './simple_components';
import './styles.css';

var request_body = empty_request_body;
var screen_active = 2;

export const APP = () => {

    function collect_screen_1(){

        const entries = Object.entries(request_body);
        let incomplete = false;
        for(let i = 0; i < 11; i++){
        
            let value = document.getElementById(entries[i][0]).value;
            
            if(value == ""){
                if(!optional_fields.includes(entries[i][0])){
                    incomplete = activate_required_fields_message(1);
                }else{
                    request_body[entries[i][0]] = value;
                }
            }
        }

        return !incomplete;
    }

    
    function go_to_2(){
        
        if(screen_active == 1){
            if(collect_screen_1()){
                deactivate_required_fields_message(1);
                changeScreen(1, 2)
            }
        }

    }

    useEffect(()=>{
        active_initial_screen(screen_active);
    }, []);
    
    return <>
        <div className='centerer'><img alt="" src='logo.svg' className='logo'></img></div>
        <h1>Job application</h1>

        <div className='form_container'>
            <div className='form_content_container'>
                <SCREEN_1 continue_func={()=>go_to_2()}/>
                <SCREEN_2/>
                <SCREEN_3/>
                <SCREEN_4/>
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