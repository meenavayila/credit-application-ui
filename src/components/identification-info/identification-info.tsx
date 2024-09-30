
import { InputText } from "../common/input-text/input-text";
import { IOption } from "../../contracts/selectDropDownProps";
import "./identification-info.css";
import { CCDate } from "../common/input-date/input-date";
import { SeletDropDown } from "../common/select-drop-down/selectDropDown";

export function IdentificationInfo() {
    const suffixOptions:Array<IOption> = [{id: "0000", name: "Social Security number(SSN)"}, {id: "1001", name: "individual Tax Id number (ITIN)"}]; 
    return(
        <div className="identification-info">
            <div className="row margin-bottom-0">
                <h4>Identification </h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <CCDate label="Date of Birth"/>
                </div>
                <div className="col-6">
                    <InputText label="Mother's maiden name"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6"> 
                    <SeletDropDown label="Tax ID type" options={suffixOptions}/>  
                </div>
                <div className="col-6">                 
                </div>
            </div>
            <div className="identification-info-box">
                <div className="row">
                    <div className="col-6">
                        <InputText label="Social Security number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="bi bi-shield-lock">{"   We need to ask for your SSN to verify your information. We'll keep your data secure."}</div>
                </div>
            </div>
        </div>
    )
}