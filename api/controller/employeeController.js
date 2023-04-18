const employeeDAO = require('../employeeDAO/employeeDAO.js');
const employeeDAOInstance = new employeeDAO();
const validator = require('validator');

class employeeController {
validateName(name){
    if (name.length < 2) {
        console.log("Nome inválido");
        throw ("Nome inválido");
    }
}
validateSurname(surname){
    if (surname.length < 2) {
        throw ("Sobrenome inválido");
    }
}

validateEmail(email){
    if (!validator.isEmail(email)) {
        throw ("Email inválido");       
    }
}

validateNis(nis){
    if (/^[a-zA-Z]+$/.test(nis)) {
        throw ("NIS inválido");       
    }

}

insertEmployee(reqBody, database){
    console.log(reqBody)
    let data = {'name' : reqBody.name,
                'surname' : reqBody.surname,
                'email' : reqBody.mail,
                'nis' : reqBody.numberpis};
    this.validateName(data.name);
    this.validateSurname(data.surname);
    this.validateEmail(data.email);
    this.validateNis(data.nis);
    let sql = "INSERT INTO funcionario (Nome, Sobrenome, Email, NIS) VALUES (?,?,?,?)";
    employeeDAOInstance.insertEmployee(data, database, sql);
}
 async getEmployees(database){
     const employee = employeeDAOInstance.getEmployees(database);
     console.log(employee);
     return employee;
  }

  alterEmployees(){

  }

  deleteEmployees(){
  
 }

}

module.exports = employeeController;
