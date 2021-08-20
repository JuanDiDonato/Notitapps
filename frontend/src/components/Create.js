import React from 'react'
export default function Create(props) {

async function create(e) {
    e.preventDefault()
    let title = document.getElementById('title').value;
    let description  = document.getElementById('description').value;
    console.log('Nota Agregada');
    const response = await fetch('/create', {method: 'POST', body: JSON.stringify({title, description}),
     headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`}});
      const result = await response.json();
      console.log(result);
      if(result.msg){
          alert('Su sesion a expirado');
          setTimeout(() => {props.history.push('/')}, 500);
      }else if(result.Auth === true){
        setTimeout(() => {props.history.push('/tasks')}, 500);
      }else if(result.Err === true){
          alert(result.Alt);
      }

      
    }



    return (
        <div className="container col-10">
            <div className="card mt-5 ">
                <div className="card-header">
                    <div className="text-center title"><h2>¡Agregar notas!</h2></div>
                </div>
                <div className="card-body">
                <form>
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" className="form-control" id="title" placeholder="titulo_ejemplo"></input>
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <button type="submit" onClick={create} className="btn btn-dark title btn-block">Guardar</button>
                </form>
                </div>
            </div>
        </div>
    )
}
