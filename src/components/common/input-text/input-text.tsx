import { IInputTextProps } from "../../../contracts/inputTextProps";
import "./input-text.css";

export function InputText(props:IInputTextProps){
    return(
        <div className="input-text">
            <div>{props.label}</div>
            <input type="text"
                name={props.name}
                value={props.value}
                maxLength={props.maxLength ? props.maxLength : 256}
                onChange={props.onChange}/>
            { !props.valid &&
                <div className="error-message">{props.errorMsg}</div>
            }
        </div>
    )
}