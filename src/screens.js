import { SIMPLE_INPUT,
    DOUBLE_SIMPLE_INPUT,
    TRIPLE_SIMPLE_INPUT,
    SIMPLE_DATE_INPUT,
    SIMPLE_EMAIL_INPUT,
    CONTINUE_BUTTON,
    GO_BACK_BUTTON,
    EIGHT_CHECKBOX_INPUT,
    TWO_CHECKBOX_INPUT,
    SIMPLE_TEXTAREA_INPUT,
} from './simple_components';
import { useEffect, useState } from 'react';

export const SCREEN_1 = ({ continue_func })=>{
    return <div id="Screen_1" className='screen'>
        <h2>Personal info</h2>
        <p id="required_fields_message_1">Fields marked with * are required to continue and send the application.</p>
        
        <SIMPLE_INPUT
            id = "full_name"
            title = "Full name *"
            is_numeric = {false}
            max_length = {254}
        />
        <SIMPLE_INPUT
            id = "ssn"
            title = "Social Security Number *"
            is_numeric = {false}
            max_length = {254}
        />
        <SIMPLE_INPUT
            id = "address"
            title = "Mailing address *"
            is_numeric = {false}
            max_length = {254}
        />

        <TRIPLE_SIMPLE_INPUT data = {[
            {
                id : "city",
                title : "City *",
                is_numeric : false,
                max_length : 254,
            },
            {
                id : "state",
                title : "State *",
                is_numeric : false,
                max_length : 254,
            },
            {
                id : "zip_code",
                title : "Zip code *",
                is_numeric : true,
                max_length : 5,
            }
        ]}
        />

        <SIMPLE_DATE_INPUT
            id = "birth_date"
            title = "Date of birth *"
        />

        <SIMPLE_INPUT
            id = "drivers_license_number"
            title = "Driver's license number *"
            is_numeric = {false}
            max_length = {254}
        />

        <DOUBLE_SIMPLE_INPUT data = {[
            {
                id : "phone",
                title : "Phone number *",
                is_numeric : false,
                max_length : 254
            },
            {
                id : "alternative_phone",
                title : "Alternative phone",
                is_numeric : false,
                max_length : 254
            }
        ]}
        />
        <SIMPLE_EMAIL_INPUT
            id = "email_address"
            title = "E-mail address *"
            max_length = {254}
        />
        <div className='centerer'><CONTINUE_BUTTON continue_func={()=>continue_func()}/></div>
    </div>
}

export const SCREEN_2 = ({ continue_func, go_back_func }) => {

    return <div id="Screen_2" className="screen">

        <h2>Job type</h2>
        <p id="required_fields_message_2">Fields marked with * are required to continue and send the application.</p>

        <EIGHT_CHECKBOX_INPUT
            title = "Are you unavailable to work any of these days? *"
            description = "(Mark the days you can't work or mark 'I have no preference')"
            title_1 = "I have no preference"
            title_2 = "Monday"
            title_3 = "Tuesday"
            title_4 = "Wednesday"
            title_5 = "Thursday"
            title_6 = "Friday"
            title_7 = "Saturday"
            title_8 = "Sunday"
            id = "days_unavailable"
            titles = {["Have no preference", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
        />

        <TWO_CHECKBOX_INPUT
            title = "Are you looking for a part or full time job? *"
            description= "(Mark an option or both if you have no preference)"
            title_1 = "Part-time"
            title_2 = "Full-time"
            id = "full_or_part_time"
            titles = {["Part-time", "Full-time"]}
            multi_selection = {true}
        />

        <TWO_CHECKBOX_INPUT
            title = "Are you looking for a day or night shift? *"
            description= "(Mark an option or both if you have no preference)"
            title_1 = "Day shift"
            title_2 = "Night shift"
            id = "day_or_night_shift"
            titles = {["Day Shift", "Night Shift"]}
            multi_selection = {true}
        />

        <SIMPLE_INPUT
            id = "hours_per_week"
            title = "How many hours per week are you looking to work? *"
            max_length = {3}
            is_numeric = {true}
        />

        <SIMPLE_DATE_INPUT
            id = "date_available_to_begin"
            title = "Date available to begin *"
        />
        <div className='centerer'>
            <GO_BACK_BUTTON go_back_func={()=>go_back_func()}/>
            <CONTINUE_BUTTON continue_func={()=>continue_func()}/>
        </div>
    </div>
}

export const SCREEN_3 = ({ continue_func, go_back_func }) => {
    return <div id="Screen_3" className="screen">
        <h2>Additional info</h2>
        <p id="required_fields_message_3">Fields marked with * are required to continue and send the application.</p>

        <TWO_CHECKBOX_INPUT
            title = "Have you ever been employed with us in the past? *"
            description= "(Mark an option or both if you have no preference)"
            title_1 = "Yes"
            title_2 = "No"
            id = "have_been_employed_with_us"
            titles = {["Yes", "No"]}
            multi_selection = {false}
        />

        <TWO_CHECKBOX_INPUT
            title = "Are you authorized to work in the US? *"
            description= "(Mark only the correct answer)"
            title_1 = "Yes"
            title_2 = "No"
            id = "is_authorized_to_work_in_the_us"
            titles = {["Yes", "No"]}
            multi_selection = {false}
        />

        <TWO_CHECKBOX_INPUT
            title = "Have you ever been convicted of a felony? *"
            description= "(Mark only the correct answer)"
            title_1 = "Yes"
            title_2 = "No"
            id = "have_been_convicted"
            titles = {["Yes", "No"]}
            multi_selection = {false}
        />

        <SIMPLE_TEXTAREA_INPUT
            id = "convicted_explanation"
            title = "If so, please explain:"
            max_length = {1000}
        />

        <SIMPLE_TEXTAREA_INPUT
            id = "glazier_experience"
            title = "List previous experience as a glazier:"
            max_length = {1000}
        />

        <div className='centerer'>
            <GO_BACK_BUTTON go_back_func={()=>go_back_func()}/>
            <CONTINUE_BUTTON continue_func={()=>continue_func()}/>
        </div>
    </div>
}

export const SCREEN_4 = ({ request_body, go_back_func }) => {

    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch("https://elitegs-job-applications-api.onrender.com/api/applications/", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(request_body)
        })
            .then(response => {
                setSent(response.ok);
                setError(!response.ok)
            })
            .catch(error => {setError(error)})
    })

    return <div id="Screen_4" className="screen_4">
        <h2>{sent ? "Your job application was succesfully sent." :
        error ? "it seems like an error has ocurred." :
        "Your job application is being send."}</h2>
        <p>{sent ?
        "You will receive a message soon!"  : 
        error ? "please try again. If the error persists, please contact us at contact@eliteglass-services.com":
        ""}</p>
        <p>{sent ? "You can close this tab now." :
        error ? "" :
        "Please don't close this tab before it is send"}</p>

        <div className='centerer'>{sent ? <img alt="" className='send_check_icon'/> : <></>}</div>

    </div>
}