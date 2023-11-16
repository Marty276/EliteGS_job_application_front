export function clear_numeric_inputs(input){
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    input.value = (input.value).split("").filter((char) => numbers.includes(char)).join("");
}

export const empty_request_body = {
    "full_name": "",
    "ssn": "",
    "address": "",
    "city": "",
    "state": "",
    "zip_code": 0,
    "birth_date": "",
    "drivers_license_number": "",
    "phone": "",
    "alternative_phone": "",
    "email_address": "",
    "days_unavailable": "",
    "full_or_part_time": "",
    "day_or_night_shift": "",
    "hours_per_week": 0,
    "date_available_to_begin": "",
    "have_been_employed_with_us": null,
    "is_authorized_to_work_in_the_us": null,
    "have_been_convicted": null,
    "convicted_explanation": "",
    "glazier_experience": "",
}

const optional_fields = [
    "alternative_phone",
    "convicted_explanation",
    "glazier_experience"
]

const numeric_fields = [
    "zip_code",
    "hours_per_week"
]

const boolean_fields = [
    "have_been_employed_with_us",
    "is_authorized_to_work_in_the_us",
    "have_been_convicted"
]

export function activate_required_fields_message(n){
    document.getElementById("required_fields_message_" + n.toString()).className = "required_fields_message";
    go_to_top();
    return true;
}

export function deactivate_required_fields_message(n){
    document.getElementById("required_fields_message_" + n.toString()).className = "";
    go_to_top();
}

export function go_to_top(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function active_initial_screen(n){
    document.getElementById("Screen_" + n.toString()).style.display = "block";
    document.getElementById("Screen_" + n.toString()).style.opacity = "1";
}

export function changeScreen(screen_active, new_screen){

    screen_active = document.getElementById("Screen_" + screen_active.toString());
    new_screen = document.getElementById("Screen_" + new_screen.toString());
    
    screen_active.style.opacity = "0";
    
    setTimeout(() => {
        screen_active.style.display = "none";
        if(new_screen){
            new_screen.style.display = "block";
            new_screen.style.opacity = "1";
        }
    }, 250);

}

export function update_checkbox_data(n, id, titles){
    let data = [];
    for(let i = 0; i < n; i ++){
        let cb = document.getElementById(id + "_cb_" + (i + 1).toString());
        if(cb.className === "marked_checkbox"){
            data.push(titles[i])
        }
    }
    document.getElementById(id).value = data.join(", ");
}

export function collect_values(request_body, n, first, last){

    const entries = Object.entries(request_body);
    let incomplete = false;
    for(let i = first; i < last; i++){
    
        let value = document.getElementById(entries[i][0]).value;
        
        if(value !== ""){
            if(numeric_fields.includes(entries[i][0])){
                request_body[entries[i][0]] = parseInt(value);
            }else if(boolean_fields.includes(entries[i][0])){
                request_body[entries[i][0]] = value === "Yes" ? true : false;
            }else{
                request_body[entries[i][0]] = value;
            }
        }else{
            if(!optional_fields.includes(entries[i][0])){
                incomplete = activate_required_fields_message(n);
            }else{
                request_body[entries[i][0]] = value;
            }
        }
    }
    return [!incomplete, request_body];
}
