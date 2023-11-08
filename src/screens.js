import { SIMPLE_INPUT,
    DOUBLE_SIMPLE_INPUT,
    TRIPLE_SIMPLE_INPUT,
    SIMPLE_DATE_INPUT,
    SIMPLE_EMAIL_INPUT,
    CONTINUE_BUTTON,
    EIGHT_CHECKBOX_INPUT,
    TWO_CHECKBOX_INPUT,
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

export const SCREEN_2 = ({ continue_func }) => {

    return <div id="Screen_2" className="screen">

        <h2>SCREEN 2</h2>
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
        />

        <TWO_CHECKBOX_INPUT
            title = "Are you looking for a day or night shift? *"
            description= "(Mark an option or both if you have no preference)"
            title_1 = "Day shift"
            title_2 = "Night shift"
            id = "day_or_night_shift"
            titles = {["Day Shift", "Night Shift"]}
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
        <div className='centerer'><CONTINUE_BUTTON continue_func={()=>continue_func()}/></div>
    </div>
}

export const SCREEN_3 = () => {
    return <div id="Screen_3" className="screen">
        <h2>SCREEN 3</h2>
        <p id="required_fields_message_3">Fields marked with * are required to continue and send the application.</p>

        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
    </div>
}

export const SCREEN_4 = () => {
    return <div id="Screen_4" className="screen">
        <h2>SCREEN 4</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
        <h2>HEY HEY HEY</h2>
    </div>
}