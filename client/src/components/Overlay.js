import React from 'react';
import './Overlay.css';

function Overlay () {
    return (
        <header className="masthead text-white text-center" >
        <div className="overlay"></div>
        <div className="container align-self-center">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <h1 className="mb-5">Kickstart your DIY Projects with budget and productivity tracking!</h1>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                    <form>
                        <div className="form-row m">
                            <div className="col-12 col-md-10 mb-2 mb-md-0 offset-md-1"><input className="form-control form-control-lg" id="newUsername"type="text" placeholder="Create a Username"></input></div>
                            <div className="col-12 col-md-10 mb-2 mb-md-0 offset-md-1"><input className="form-control form-control-lg" id="newPassword" type="text" placeholder="Create a Password"></input></div>
                            <div className="col-12 col-md-10 mb-2 mb-md-0 offset-md-1"><button className="btn btn-primary btn-block btn-lg" type="submit" id="submitSignUp">Sign up!</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Overlay;