import { IOption } from "../../contracts/selectDropDownProps";
import { InputText } from "../common/input-text/input-text";
import { SeletDropDown } from "../common/select-drop-down/selectDropDown";
import "./finacialinfo.css";

export function FinacialInfo(){
    const dropDownOption:Array<IOption>=[{id:"1000",name:"Choose One"},{id:"1001",name:"Own"},{id:"1002",name:"Rent"},{id:"1003",name:"Other"}];
    const dropdownOption:Array<IOption>=[{id:"100",name:"Choose One"},{id:"101",name:"Employed"},{id:"102",name:"Self-employed"},{id:"103",name:"Unemployed"},{id:"104",name:"Other"}];
    return(
        <div className="finacial-info">

            <h4>Financial info</h4>

            <div className="row">
                <div className="col-6">
                  <SeletDropDown  label="Type of residence" options={dropDownOption}/>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                <div className="col-6">
                    <SeletDropDown label="Employment status" options={dropdownOption}/>
                </div>
                <div className="col-6">
                    <InputText  label="Total gross annual income"/>
                </div>
            </div>

            <div className="row">

                <div className="col-1">
                    <span className="bi bi-lightbulb"></span>
                </div>
                <div className="col-11">
                    <h5>You should know</h5>
                    <h6 className="h6">
                    Your total gross annual income is what you earn or reasonably expect to earn. If you’re 21 or older and regularly use income from others to pay your bills, you can include that too.
                    </h6>
                    <h6 className="h6">
                    Alimony, child support or separate maintenance income need not be revealed if you do not wish to have it considered as a basis for repaying this obligation. If you include non-taxable income (income that you or your tax advisor has determined isn't subject to income tax), increase that amount by 25%.
                    </h6>
                </div>

                <div className="finacial-icon">
                    <span className="bi bi-caret-right-fill"></span>
                    <span>More info</span>
                </div>
            </div>

        </div>
    )
}