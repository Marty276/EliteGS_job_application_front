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