import React from "react";
import "./cards.css"
import FormDialog from "../dialog/dialog";

export default function Card(props){
    const [open, setOpen] = React.useState(false);
    
    return( 
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        Nome={props.Nome}
        Sobrenome={props.Sobrenome}
        email={props.email}
        NIS={props.NIS}
        listEmployee={props.listEmp}
        setListEmployee={props.setListEmployees}
        id={props.id}
      />
        
 <div className="employee-container">
    <h1 classname="title-emp">Funcionários </h1>
    <p classname="name--emp"> {props.Nome}  </p>
    <p classname="surname--emp"> {props.Sobrenome} </p>
    <p classname="email--emp">{props.email}</p>
    <p classname="pis--emp"> {props.NIS} </p>  
                                                                                 
    </div>
    </>
    )
}