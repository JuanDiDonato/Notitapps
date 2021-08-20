import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {Authcontext} from '../Context/Authcontext';

export default function Index(props) {

    const {ifToken, setifToken} = useContext(Authcontext);

    const login = async (e) =>{
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    const response = await fetch('/login', {method:'POST', body: JSON.stringify({username, password}),
    headers:{'Content-Type': 'application/json'}});
    const result = await response.json();
    if(result.access_token){
        localStorage.setItem('jwt', result.access_token);
        console.log('Incio sesion correctamente');
        setifToken(true);
        setTimeout(() => {props.history.push('/tasks')}, 1000);
        
        
    }else{
        alert('¡Contraseña o usuario incorecto!')
    }
    }  

    return (
        <div className="container mt-5 col-10">
            <div className="card mx-auto">
                <div className="card-header">
                    <div className="text-center mt-2 title"><h2>Bienvenid@!</h2></div>                    
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Nombre de usuario</label>
                            <input type="text" className="form-control" id="username" placeholder="usuario_ejemplo"></input>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="tu contraseña"></input>
                        </div>
                            <button type="submit" onClick={login} className="btn btn-dark title btn-block">Iniciar sesion</button>
                            <div className="text-center mt-2 title"><h5>¿¡No tenes una cuenta!?</h5><Link to='/register'><h5>¡Registrate!</h5></Link></div>
                    </form>
                </div>
            </div>
        </div>
                )
}

  

