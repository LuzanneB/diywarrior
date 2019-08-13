import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar shadow-sm navbar-light navbar-expand bg-light navigation-clean mb-3">
    <div className="container">
        <a className="navbar-brand mb-0" href="/" id="brand">DIY Warrior</a>
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"></button>
        <div className="collapse navbar-collapse" id="navcol-1"><button className="btn btn-primary ml-auto" type="button"
                data-toggle="modal" data-target="#login">Sign In</button></div>

   {/* modal */}
        <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="username" aria-describedby="username"
                                    placeholder="Username"></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"></input>
                            </div>
                            <button type="submit" className="btn btn-primary" id="submitLogin">Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Nevermind!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

  );
}
  
  
  export default NavBar;