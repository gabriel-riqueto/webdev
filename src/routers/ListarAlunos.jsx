
import {} from 'react'
import { Link } from 'react-router-dom'
import {FaEdit, FaTrash} from 'react-icons/fa'

function ListarAlunos(){
    const [alunos, setAlunos] = useState([]);

    //promise assincrona

    useEffect(()=>{
        fetch('http://localhost:5000/alunos')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setAlunos(res);
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/alunos/${id}`,{
            method:'delete'
        })
        .then(()=>{
            window.location='listaralunos';
        })
        .catch((error)=>{
            console.log(error)
        })
    }



    return(
        <>
        <h1>Listar alunos</h1>
        <Link to='/incluir'>INSERIR ALUNOS</Link>
        <table>
            <thead>
            <tr>
                <th>Nome:</th>
                <th>Idade</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {alunos.map((alu)=(
                    <tr key={alu.id}>
                        <td>{alu.nome}</td>
                        <td>{alu.idade}</td>
                        <td>
                            <Link to={`/editar/${alu.id}`}>
                                <FaEdit/>
                            </Link>
                            <button onClick={handleDelete.bind(this, alu.id)}>
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default ListarAlunos()