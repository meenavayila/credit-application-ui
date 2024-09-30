import { useState } from "react";
import { useAppDispatch } from "../../container/hooks";
import { IOption, ISelectDropDownProps } from "../../contracts/selectDropDownProps";
import { InputText } from "../common/input-text/input-text";
import { SeletDropDown } from "../common/select-drop-down/selectDropDown";
import { updateFirstName, updateLastName, updateMiddleName } from "./personal-info-slice";

import "./personal-info.css";
import { validateFirstName } from "../../util/validation-util";

export function PersonalInfo(){

    const dispatch = useAppDispatch();

    // Data for customer suffix drop down
    const suffixOptions:Array<IOption> = [{id: "0000", name: "None"}, {id: "1001", name: "JR"}, {id: "1002", name: "SR"}, {id: "1003", name: "II"}, {id: "1004", name: "III"}, {id: "1005", name: "IV"}, {id: "1006", name: "V"}, {id: "1007", name: "VI"}, {id: "1008", name: "VII"}, {id: "1009", name: "VIII"}];

    // State variables for input field values
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');

    // State variables for input field validation
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [middleNameValid, setMiddleNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    
    const onChange = (event:any) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        switch(fieldName){
            case 'firstName': 
                setFirstName(fieldValue);
                setFirstNameValid(validateFirstName(fieldValue));
                return dispatch(updateFirstName(fieldValue));
            case 'middleName': 
                setMiddleName(fieldValue);
                return dispatch(updateMiddleName(fieldValue));
            case 'lastName': 
                setLastName(fieldValue);
                return dispatch(updateLastName(fieldValue));
        };
    }
    
    return(
        <div className="personal-info">
            <div className="row margin-bottom-0">
                <h4>Personal info</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <InputText label="First name" 
                        name="firstName" 
                        value={firstName} 
                        maxLength={25}
                        valid={firstNameValid}
                        errorMsg="Please enter a valid first name"
                        onChange={onChange}/>
                </div>
                <div className="col-6">
                    <InputText label="Middle name (optional)" name="middleName"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <InputText label="Last name" name="lastName"/>
                </div>
                <div className="col-6">
                    <SeletDropDown label="Suffix (optinal)" options={suffixOptions}/>                   
                </div>
                
            </div>
        </div>
    )
}