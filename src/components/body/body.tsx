import { AuthorizedUser } from "../authorized-user/authorizedUser";
import { ContactInfo } from "../contact-info/contactInfo";
import { FinacialInfo } from "../finacial-info/finacialinfo";
import { HomeAddress } from "../home-address/home-address";
import { IdentificationInfo } from "../identification-info/identification-info";
import { PersonalInfo } from "../personal-info/personal-info";
import { PrelimInfo } from "../prelim-info/prelimInfo";
import "./body.css";
export function CCBody(){
    return(
        <div className="cc-body">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <PrelimInfo/>
                    <PersonalInfo/>
                    <IdentificationInfo/>
                    <HomeAddress/>
                    <ContactInfo/>
                    <FinacialInfo/>
                    <AuthorizedUser/>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}