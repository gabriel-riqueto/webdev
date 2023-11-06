import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaLocationArrow as Enviar, FaRegTimesCircle}from 'react-icons/fa'

function Alunos() {

//Hook- useParams para pegar o codigo
  let {id}= useParams();

  //Hook useState
  
  const [novo, setNovo]=useState({
    id,
    nome:'',
    email:'',
  });


  //criando a variavel metodo para o post
  let metodo ='post'
  if(id){
    metodo='put'
  }
  //funcão 
  const handleChange =(e)=>{
    setNovo({...novo, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  fetch(`http://localhost:5000/alunos/${id ? id: ''}`,{
    method:metodo,
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(novo),
  }).then(()=>{
    window.location='/';
  });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/alunos/${id}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        setNovo(data);
      })
    }
  }, [id])

  
  return(
    <>
    <h1>CADASTRAR ALUNOS</h1>
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="nome"
    value={novo.nome}
    placeholder="Digite seu nome"
    onChange={handleChange}
    />

    <input
    type="text"
    name="email"
    value={novo.email}
    placeholder="Digite seu email"
    onChange={handleChange}
    />
    <button type="submit">Cadastrar</button>
    <Link to="/listarAlunos">
      <FaRegTimesCircle/>
    </Link>
    </form>
   
    </>
  )
 
}

export default Alunos;
