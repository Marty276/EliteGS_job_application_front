export function clear_numeric_inputs(input){
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    input.value = (input.value).split("").filter((char) => numbers.includes(char)).join("");
}

export const empty_request_body = {
    full_name : null,
    ssn : null,
    address : null,
    city : null,
    state : null,
    zip_code : null,
    birth_date : null,
    drivers_license_number : null,
    email_address : null,
    phone : null,
    alternative_phone : null,
    
    days_unavailable : null,
    full_or_part_time : null,
    day_or_night_shift : null,
    hours_per_week : null,
    date_available_to_begin : null,

    have_been_employed_with_us : null,
    is_authorized_to_work_in_the_us : null,
    have_been_convicted : null,
    convicted_explanation : null,
    glazier_experience : null,
}

export const optional_fields = [
    "alternative_phone",
    "days_unavailable",
    "convicted_explanation",
    "glazier_experience"
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
        new_screen.style.display = "block";
        new_screen.style.opacity = "1";
    }, 250);

}