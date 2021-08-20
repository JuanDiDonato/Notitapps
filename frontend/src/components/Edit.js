import React, {useEffect,useState} from 'react'
export default function Create(props) {

    const { match: { params } } = props;
    const id = params.id

    const [Task, setTask] = useState({title:'', description: ''});

async function edit(e) {
    e.preventDefault()
    let title = document.getElementById('title').value;
    let description  = document.getElementById('description').value;
    console.log('Nota Agregada');
    const response = await fetch('/tasks/'+id, {method: 'PUT', body: JSON.stringify({title, description}),
     headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('jwt')}`}});
      const result = await response.json();
      console.log(result);
      if(result.msg){
        alert('Su sesion a expirado');
        setTimeout(() => {props.history.push('/')}, 500);
      }else if(result.Auth === true){
        setTimeout(() => {props.history.push('/tasks')}, 1000);
      }else if(result.Err === true){
        alert(result.Alt);
      }else if(result.Er_id === true){
        alert(result.Alt);
        setTimeout(() => {props.history.push('/tasks')}, 1000);
        }
}

    const onchange = e =>{
        setTask({...Task,[e.target.id] : e.target.value});
    }

    useEffect(() => {
        fetch('/tasks/'+id, {method:'GET', headers:{'Authorization': `Bearer ${localStorage.getItem('jwt')}`}})
        .then(res => res.json()).then(data => {
                console.log(data);
                setTask({title :data[1],description : data[2]});
                });
    }, [])

    return (
        <div className="container col-10">
            <div className="card mt-5 ">
                <div className="card-header">
                    <div className="text-center  title"><h2>¡Edita la nota!</h2></div>
                </div>
                <div className="card-body">
                <form>
                <div className="form-group">
                    <label>Nuevo titulo</label>
                    <input type="text" className="form-control" id="title" placeholder="title_example"  onChange={onchange} value={Task.title} ></input>
                </div>
                <div className="form-group">
                    <label>Nueva descripción</label>
                    <textarea className="form-control" id="description" rows="3" onChange={onchange} value={Task.description} ></textarea>
                </div>
                <button type="submit" onClick={edit} className="btn btn-dark title btn-block">Guardar</button>
                </form>
                </div>
            </div>
        </div>
    )
}
