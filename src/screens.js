import { SIMPLE_INPUT, DOUBLE_SIMPLE_INPUT, TRIPLE_SIMPLE_INPUT, SIMPLE_DATE_INPUT, SIMPLE_EMAIL_INPUT, CONTINUE_BUTTON } from './simple_components';

export const SCREEN_1 = ()=>{
    return <div id="Screen_1">
        <h2>Personal info</h2>
        <p>Fields marked with * are required to continue and send the application.</p>

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
        <div className='centerer'><CONTINUE_BUTTON continue_func={()=>console.log("SWSS")}/></div>
    </div>
}

export const SCREEN_2 = () => {
    return <h1>Screen_2</h1>
}

export const SCREEN_3 = () => {
    return <h1>Screen_3</h1>
}

export const SCREEN_4 = () => {
    return <h1>Screen_4</h1>
}