import { useEffect, useState } from "react";
import {Link}from 'react-router-dom'
import {FaEdit, FaTrash} from 'react-icons/fa'

function ListarAlunos(){


    const [alunos, setAlunos]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/alunos/')
        .then((resp)=>{
            return resp.json();
        })
        .then((resp)=>{
            setAlunos(resp);
        })
    },[])

    const handleDelete =(id)=>{
        fetch(`http://localhost:5000/alunos/${id}`,{
            method:'delete',
        })
        .then(()=>{
            window.location ='/listaralunos'
        });
    }

    return(
        <>
        <h1>Listar Alunos</h1>
        <Link to="/incluir">Inserir Alunos</Link>
        <table>
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Email:</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {alunos.map((alu)=>(
                <tr key={alu.id}>
                <td>{alu.nome}</td>
                <td>{alu.email}</td>
                <td>
                    <Link to={`/editar/${alu.id}`}>
                        <FaEdit/>
                    </Link>

                    <Link onClick={handleDelete.bind(this, alu.id)}>
                        <FaTrash/>
                    </Link>
                </td>
                </tr>
                ))}
                
            </tbody>
        </table>

        </>
    )
}

export default ListarAlunos;