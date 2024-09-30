
import { useState } from "react";
import "./authorizedUser.css";
export function AuthorizedUser(){

    const [paperlessSwitchChecked, setPaperlessSwitchChecked] = useState(false);

    function onChangeOfPaperlessRadioBtn(event:any) {
        const value = event.target.
        setPaperlessSwitchChecked();
    }
   
    return(
        <div>
            <div className="row">
                <div className="col-6">
                    <h5>Authorized user</h5>
                </div>
                <div className="col-6"></div> 
            </div>

            <div>
                <p>You may add up to 5 authorized users to your account. We’ll send an individual card for each one.</p>
            </div>

            <div className="circle row">
                <div>
                    <span className="bi bi-plus-circle"></span>
                    <a href="ADD authorized user">Add authorized user</a>
                </div>
            </div>

            <div className="container">
                <div className="box">
                    <div className="row">
                        <div className="col-6">
                        <h6>Paperless statements</h6>
                    </div>
                        <div className="col-6"></div> 
                </div>

                    <div>
                        <p>We'll automatically send your billing statements digitally. If you'd prefer to receive printed statements, change your preferences below.</p>
                    </div>


                    <div>
                        <p>You can change these settings anytime at chase.com or in the Chase Mobile® app.</p>
                    </div>


                    <div className="row on-off-butto">
                        <div className="col-3">
                            <p>Paperless</p>
                        </div>
                        <div className=" col-9">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={paperlessSwitchChecked} onChange={onChangeOfPaperlessRadioBtn}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
                


            
        </div>
    )
}