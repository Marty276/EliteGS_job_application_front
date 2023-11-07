import { clear_numeric_inputs } from './tools';

export const SIMPLE_INPUT = ({ title, id, is_numeric, max_length }) => {

    return <div className="simple_input">
        <h4>{title}</h4>
        <input name={id}
            id={id}
            maxLength={max_length}
            onChange={is_numeric ? (e)=>{clear_numeric_inputs(e.target)} : ()=>{}}
            placeholder=""
        ></input>
    </div>
}

export const DOUBLE_SIMPLE_INPUT = ( { data } ) => {
    return <div className="many_inputs_container">
        <div className="double_input">
            <SIMPLE_INPUT
                title={data[0].title}
                id={data[0].id}
                is_numeric={data[0].is_numeric}
                max_length={data[0].max_length}
            />
        </div>
        <div className="double_input">
            <SIMPLE_INPUT
                title={data[1].title}
                id={data[1].id}
                is_numeric={data[1].is_numeric}
                max_length={data[1].max_length}
            />
        </div>
    </div>
}

export const TRIPLE_SIMPLE_INPUT = ( { data } ) => {
    return <div className="many_inputs_container">
        <div className="triple_input">
            <SIMPLE_INPUT
                title={data[0].title}
                id={data[0].id}
                is_numeric={data[0].is_numeric}
                max_length={data[0].max_length}
            />
        </div>
        <div className="triple_input">
            <SIMPLE_INPUT
                title={data[1].title}
                id={data[1].id}
                is_numeric={data[1].is_numeric}
                max_length={data[1].max_length}
            />
        </div>
        <div className="triple_input">
            <SIMPLE_INPUT
                title={data[2].title}
                id={data[2].id}
                is_numeric={data[2].is_numeric}
                max_length={data[2].max_length}
            />
        </div>
    </div>
}

export const SIMPLE_DATE_INPUT = ({ title, id }) => {

    return <div className="simple_input">
        <h4>{title}</h4>
        <input name={id}
            id={id}
            placeholder=""
            type="date"
        ></input>
    </div>
}

export const SIMPLE_EMAIL_INPUT = ({ title, id, is_numeric, max_length }) => {

    return <div className="simple_input">
        <h4>{title}</h4>
        <input name={id}
            id={id}
            maxLength={max_length}
            type="email"
            placeholder=""
        ></input>
    </div>
}

export const EIGHT_CHECKBOX_INPUT = (props)=>{
    return <h2>{props.title}</h2>
}

export const CONTINUE_BUTTON = ({ continue_func }) => {
    return <button className="continue_button" onClick={()=>{continue_func()}}>Continue</button>
}