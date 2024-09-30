
import { IOption } from "../../contracts/selectDropDownProps";
import { InputText } from "../common/input-text/input-text";
import { SeletDropDown } from "../common/select-drop-down/selectDropDown";
import "./home-address.css";

export function HomeAddress(){
    const suffixOptions:Array<IOption> = [{id: "0000", name: "Domestic"},{id:"1001",name:"Milatery"}];
    const dropdwonOptions:Array<IOption> = [{id:"000",name:"choose one"},{id: "100",name:"Alaska"},{id:"101",name:"Alabama"},{id:"102",name:"Arizona"}];
    return(
        <div className="home-address">
            
            <h4 className="h3">Home address</h4>
            
            <div className="row">
                <div className="col-6">
                    <SeletDropDown label="Address type" options={suffixOptions}/>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                <div className="col-6">
                    <InputText label="Street address"/>
                </div>
                <div className="col-6">
                    <InputText label="Suite/apt/other (optional)"/>
                </div>
            </div>
                
           
            <div className="row">
                <div className="col-6">
                    <InputText label="City"/>
                </div>
                <div className="col-6">
                    <SeletDropDown label="State" options={dropdwonOptions}/>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <InputText label="ZIP code"/>
                </div>
                <div className="col-6"></div>
            </div>
  
        </div>
    )
}