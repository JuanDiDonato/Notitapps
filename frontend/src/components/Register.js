import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Msg from './Msg';

export default function Index(props) {

    const [Confirm, setConfirm] = useState(null);

    const register = e => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        fetch('/register', {method:'POST', body: JSON.stringify({username,password}),
        headers:{'Content-Type': 'application/json'}}).then(res => res.json()).then(data => {
            
            if(data.Register === true){
                setTimeout(() => {setConfirm(null)}, 2000);
                setConfirm(data);
                setTimeout(() => {props.history.push('/')}, 1000);
            }else{
                setConfirm(data)
                
            }
        })

        };



    return(

        <div className="container mt-5 col-10">
            <div className="card">
                <div className="card-header">
                    <div className="container mt-3">{Confirm? <Msg Confirm={Confirm}/>:null}</div>  
                    <div className="text-center text-primary  title"><h2>¡Registrate aca!</h2></div>                  
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Crea tu nombre de usuario</label>
                            <input type="text" className="form-control"  id="username" placeholder="usuario_ejemplo"></input>
                        </div>
                        <div className="form-group">
                            <label>Escribi una contraseña</label>
                            <input type="password" className="form-control"  id="password" placeholder="¡tu contraseña!"></input>
                        </div>
                            <button type="submit" className="btn btn-dark title btn-block" onClick={register}>Registrar</button>
                            <div className="text-center mt-2 title"><h5>¿Ya tenes una cuenta?</h5><Link to='/'><h5>¡Inicia sesion ahora!</h5></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )

}
