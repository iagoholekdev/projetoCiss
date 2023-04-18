import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from './components/cards/cards.js';
import './App.css'; 
//abd

import Axios from 'axios';

function App() {
  const [values, setValues] = useState();
  const [listEmployees, setListEmployees] = useState();

  const HandleChangeValue = values => {
    setValues(prevValue=>({
      ...prevValue,
      [values.target.name]: values.target.value,
    }))
  };

  const handleGetButton = () => {
    Axios.get('http://localhost:8080/getEmployee').then((response) => {
      setListEmployees(response.data);
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:8080/getEmployee').then((response) => {
        setListEmployees(response.data)
    })
}, [listEmployees])


    const handleClickButton = () =>
    {

      Axios.post('http://localhost:8080/insertEmployee', {
        name: values.name,
        surname: values.surname,
        mail: values.mail,
        numberpis: values.numberpis,
      }).then((response) => {
        console.log(response)})
    };
  

  
  return (
    <div className="app-container">  
      <div className="funcionario-app">
        <div>
        <h1>Cadastro funcionário</h1>      
          <input className='input-employee'
           onChange={HandleChangeValue} 
           type="text" 
           placeholder="Primeiro Nome"  
          name="name" required/><br></br>
        </div>
        <div> 
          <input type="text"
            onChange={HandleChangeValue} 
            className='input-employee'
            placeholder="Segundo Nome"  
            name="surname"
            required/><br></br>
        </div>
         <div>  
          <input type="text" 
                onChange={HandleChangeValue}
                className='input-employee' 
                placeholder='Digite um e-mail' 
                name="mail" required/><br></br>
        </div>        
          <input 
            type="number"  
            onChange={HandleChangeValue}
            className='input-employee'            
            min="1"  
            placeholder="Número NIS(PIS)"      
            name="numberpis"required/><br></br>        
        </div>  
      <div>
      <div>
        <Button classname="register" 
        onClick={() => handleClickButton()}
         variant="primary">Cadastrar</Button>{' '}    
      </div>

      </div>
      <div>
         <Button classname="getEmployee"
          onClick={() => handleGetButton()}
         variant="primary">Consultar Funcionários</Button>{' '}
          {typeof listEmployees !== "undefined" &&
          listEmployees.map((value) => {            
            return <Card 
                    key={value.id}
                    listEmp={listEmployees} 
                    setListEmp={setListEmployees}
                    id={value.id}
                    Nome={value.Nome}
                    Sobrenome={value.Sobrenome}         
                    email={value.email}
                    NIS={value.NIS}> </Card>})}

      </div>
    </div>
    
  );
  }


export default App;
