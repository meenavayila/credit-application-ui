import { ISelectDropDownProps } from "../../../contracts/selectDropDownProps";


export function SeletDropDown(props:ISelectDropDownProps){
    return(
        <div>
            <div>{props.label}</div>
            <select>
                {
                    props.options.map(option=><option key={option.id.toString()}>{option.name}</option>)
                    
                }
            </select>
        </div>
    )
}