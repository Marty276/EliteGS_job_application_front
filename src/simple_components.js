import { clear_numeric_inputs, update_checkbox_data } from './tools';

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

export const EIGHT_CHECKBOX_INPUT = ({ title, description, id, titles, save, title_1, id_1, title_2, id_2, title_3, id_3, title_4, id_4, title_5, id_5, title_6, id_6, title_7, id_7, title_8, id_8 })=>{

    function mark_unmark_checkboxes(box){
        clear_specific_checkboxes(box);
        box.className = box.className === "checkbox" ? "marked_checkbox" : "checkbox";
        update_checkbox_data(8, id, titles);
    }

    function clear_specific_checkboxes(box){
        if(box.id === id + "_cb_1" && box.className === "checkbox"){
            for(let i = 2; i < 9; i++){
                document.getElementById(id + "_cb_" + i.toString()).className = "checkbox";
            }
        }else if(box.id !== id + "_cb_1" && document.getElementById(id + "_cb_1").className === "marked_checkbox"){
            document.getElementById(id + "_cb_1").className = "checkbox";
        }
    }

    return <div className = 'many_checkbox_cont'>
        <h4>{title}</h4>
        <h4>{description}</h4>
        <input className = 'invisible_input' id = {id}></input>
        <div className = 'many_inputs_container'>
            <div className = 'checkbox_input'>
                <label>{ title_1 }</label>
                <div className='checkbox' id={id + "_cb_1"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
            <div className='checkbox_input'>
                <label>{ title_2 }</label>
                <div className='checkbox' id={id + "_cb_2"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
        </div>
        <div className='many_inputs_container'>
            <div className='checkbox_input'>
                <label>{ title_3 }</label>
                <div className='checkbox' id={id + "_cb_3"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
            <div className='checkbox_input'>
                <label>{ title_4 }</label>
                <div className='checkbox' id={id + "_cb_4"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
        </div>
        <div className='many_inputs_container'>
            <div className='checkbox_input'>
                <label>{ title_5 }</label>
                <div className='checkbox' id={id + "_cb_5"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
            <div className='checkbox_input'>
                <label>{ title_6 }</label>
                <div className='checkbox' id={id + "_cb_6"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
        </div>
        <div className='many_inputs_container'>
            <div className='checkbox_input'>
                <label>{ title_7 }</label>
                <div className='checkbox' id={id + "_cb_7"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
            <div className='checkbox_input'>
                <label>{ title_8 }</label>
                <div className='checkbox' id={id + "_cb_8"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
        </div>
    </div>
}

export const TWO_CHECKBOX_INPUT = ({ title, description, id, save, titles, title_1, id_1, title_2, id_2})=>{
    
    function mark_unmark_checkboxes(box){
        box.className = box.className === "checkbox" ? "marked_checkbox" : "checkbox";
        update_checkbox_data(2, id, titles);
    }

    return <div className='many_checkbox_cont'>
        <h4>{title}</h4>
        <h4>{description}</h4>
        <input className = 'invisible_input' id = {id}></input>
        <div className='many_inputs_container'>
            <div className='checkbox_input'>
                <label>{ title_1 }</label>
                <div className='checkbox' id={id + "_cb_1"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
            <div className='checkbox_input'>
                <label>{ title_2 }</label>
                <div className='checkbox' id={id + "_cb_2"} onClick={(e)=>{mark_unmark_checkboxes(e.target)}}></div>
            </div>
        </div>
    </div>
}

export const CONTINUE_BUTTON = ({ continue_func }) => {
    return <button className="continue_button" onClick={()=>{continue_func()}}>Continue</button>
}