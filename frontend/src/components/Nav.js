import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Authcontext} from '../Context/Authcontext';


export default function Nav(props) {

  const {ifToken, setifToken} = useContext(Authcontext);

  console.log(ifToken);

  const logout = e => {
    localStorage.removeItem('jwt');
    setifToken(false);
    console.log(ifToken);
  };
  
  const Auth = () => {
    return(
    <>

        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <Link to='/tasks'><div className="navbar-brand title text-primary">Notitapss</div></Link>
            <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
              <Link className="nav-link title text-dark" to='/create'>Nueva tarea</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link title text-dark" to='/' onClick={logout}>Cerrar sesion</Link>
            </li> 
            </ul>
          </div>
            </div>
          </nav>
        </div>



    </>
    )

  };

  const noAuth = () => {
    return(
      <>
        <div>
          <nav className="navbar  navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav">
              <div className="nav-item active">
                <a className="navbar-brand title text-primary">Notitapss</a>
              </div>
            </ul>
          </div>
          </nav>
        </div>
      </>
    )

  };

    return (
        <div>
            {!ifToken ? noAuth():Auth()}
        </div>
    
    )
}
