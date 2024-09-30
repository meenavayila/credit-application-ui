import { IInputDateProps } from "../../../contracts/inputDateProps";

export function CCDate(props:IInputDateProps) {
    return(
        <div>
            <div>{props.label}</div>
            <input type="date"/>
        </div>
    )
}