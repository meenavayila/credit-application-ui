import { InputText } from "../common/input-text/input-text";
import "./contactInfo.css";

export function ContactInfo() {
    return(
        <div className="contact-info">
            
            <h4>Contact info</h4>
            
            {/** Email Address and pone number row */}
            <div className="row">
                <div className="col-6">
                    <InputText label="Email address"/>
                </div>
                <div className="col-6">
                    <InputText label="Phone number"/>
                </div>                
            </div>

            {/**  */}
            <div className="row">
                <div className="contact-info-box">                    
                    <div className="bi bi-file-earmark-text">{"  By giving us your mobile number, Chase has your consent to send you automated calls and texts to service all of your accounts with us."}</div> 
                    <div className="row">
                        <div className="contact-icon">
                            <span className="bi bi-caret-right-fill"></span>
                            <span>please read a text</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div>
                    <h6>Authorization for the Social Security Administration to Disclose Your Social Security Number Verification</h6> 
                </div>
                <div>
                    I authorize the Social Security Administration (SSA) to verify and disclose to JPMorgan Chase 
                    Bank, N.A. through Early Warning Services, LLC, their service provider for the purpose of this
                    transaction whether the name, Social Security Number (SSN) and date of birth I have submitted
                    matches information in SSA records. My consent is for a one-time validation within the next 90 days.
                </div>
            </div>
            
            <div className="row">
                <div className="col-1">
                    <input type="checkbox" className="check-box"/>
                </div>
                <div className="col-11">
                    <h6>Check this box to provide your electronic signature for the authorization above.</h6>
                </div>
            </div>

        </div>
    )
}