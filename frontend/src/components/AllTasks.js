import React, {useEffect, useState} from 'react'
import '../assest/css/task.css'
import { Link } from 'react-router-dom';

export default function Index(props) {
    const [Tasks, setTasks] = useState([]);

    const Delete = id => {
        fetch('/tasks/'+id , {method:'DELETE', headers:{'Authorization': `Bearer ${localStorage.getItem('jwt')}`},
        }).then(res => res.json()).then(data => {
            if(data.Auth === false){
                alert('Error!');
            }else{
                fetch('/tasks', {method:'GET', headers:{'Authorization': `Bearer ${localStorage.getItem('jwt')}`}})
                .then(res => res.json()).then(data => {
                    if(data.Task === true){
                        setTasks(data.tasks);
                    }else{
                        console.log('ERRROR')
                    }
        
                });
        }});
    }

    useEffect(() => {
        fetch('/tasks', {method:'GET', headers:{'Authorization': `Bearer ${localStorage.getItem('jwt')}`}})
        .then(res => res.json()).then(data => {
            if(data.Task === true){
                setTasks(data.tasks);
            }else{
                console.log('ERRROR')
            }

        });
        
    }, []);

    
    return(
            <div className="col-12 mx-auto row">
                {Tasks.map((task,i) => {
                    console.log(task)
                        return (
                            <div className="container col-md-4 mt-3">
                                <div className="card mx-auto mt-2">
                                    <div key={i}></div>
                                    <div className="card-header text-center text-dark title"> {task[1]}</div>
                                    <div className="card-body text-center">{task[2]}</div>
                                    <div className="container p-2">
                                        <button type="submit" className="btn btn-dark btn-block" onClick={() => Delete(task[0])}>Eliminar</button>
                                        <Link type="submit" className="btn btn-outline-dark btn-block" to={'/edit/'+task[0]}>Editar</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

    )

}
