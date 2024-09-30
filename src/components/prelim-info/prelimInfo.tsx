import { useEffect, useState } from "react";
import {Iterm} from '../../contracts/terms';
import "./prelimInfo.css";
import axios from "axios";

export  function PrelimInfo(){

    const [terms, setTerms] = useState<Iterm[]>([]);
    
    function LoadTermsAndConditions(){
        axios.get("http://localhost:5050/api/termsandconditions")
        .then(response=>{
            setTerms(response.data);
        })
    }

    useEffect(() => {
        LoadTermsAndConditions();
    }, []);

    return(
        <div className="preliminfo">
            <div className="card-img">
                <img src="card.png" style={{height:"110px",width:"175px"}}/>
                <h2>Let's get started.</h2>
            </div>
            <div className="prelim-txt ">
                {
                    terms.map(term => <div key={term.header.toString()}><h5>{term.header}</h5><p>{term.message}</p></div>)
                }
                <hr></hr>
                <div>
                    <span className="bi bi-exclamation-circle fs-5"></span>
                    <span className="annual-fee-text"><a href="">*See details</a></span>
                    <span className="annual-fee-text">†See Pricing and Terms below</span>
                </div>
            </div>
        </div>
    )
}