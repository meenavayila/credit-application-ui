export function CCHeader(){
    return(
        <div className="cc-header">
            <div className="row">
                <div className="col-6">
                    <div className="cc-header-logo">
                        <span className="padding-2 bi bi-list"></span>
                        <span className="padding-2">
                            <img src="chaselogo.png" className="cc-chase-logo"/>
                        </span>
                    </div>
                   
                </div>

                <div className="col-6">
                    <div className="cc-header-exit">
                        <span>EXIT</span>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}