import { useState, useEffect } from 'react';
import { SCREEN_1, SCREEN_2, SCREEN_3, SCREEN_4 } from './screens';
import { empty_request_body,
    deactivate_required_fields_message,
    active_initial_screen,
    changeScreen,
    collect_values,
    go_to_top,
} from './tools';
import './styles.css';

var request_body = empty_request_body;


export const APP = () => {
    
    const [active_screen, setActive_screen] = useState(2);

    function next_screen(n, first, last){
        let can_continue;
        [can_continue, request_body]= collect_values(request_body, n, first, last);
        if(can_continue){
            deactivate_required_fields_message(n);
            changeScreen(n, n + 1);
            setActive_screen(n + 1);
        }
    }

    function go_back(n){
        go_to_top();
        changeScreen(n, n - 1);
        setActive_screen(n - 1);
    }

    useEffect(()=>{
        active_initial_screen(active_screen);
    });
    
    return <>
        <div className='centerer'><img alt="" src='./job_application/logo.svg' className='logo'></img></div>
        <h1>Job application</h1>
        <div className='form_container'>
            <div className='form_content_container'>
                <SCREEN_1 continue_func = {()=>next_screen(1, 0, 11)}/>
                <SCREEN_2 continue_func = {()=>next_screen(2, 11, 16)} go_back_func = {()=>go_back(2)}/>
                <SCREEN_3 continue_func = {()=>next_screen(3, 16, 21)} go_back_func = {()=>go_back(3)}/>
                {active_screen === 4 ? <SCREEN_4 request_body = {request_body} go_back_func = {()=>go_back(4)}/> : <></>}
            </div>
        </div>

        <div className='footer'>
            <img alt="" className='footer_logo' src='./job_application/logo.svg'/>
            <div className='footer_text'>
                <h4>Contact Us:</h4>
                <p>Phone:<br/>+1 (407) 486-4206</p>
                <p>E-mail:<br/>contact@eliteglass-services.com</p>
            </div>
        </div>
    </>
}