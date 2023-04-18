
class employeeDAO {
  createEmployee(data, database, sql) {
    database.query(sql, 
        [data.name, data.surname, data.email, data.nis]    
    );
  }

 async  getEmployees(database) {
   return database.query('SELECT * FROM funcionario', (err, result) => {
        if (err) console.log(err);
        else
        console.log(result)
        return result;
    });
  }




  alterEmployees(data, database, sql){
   /* TODO /** */
  }

  deleteEmployees(data, database, sql){
     /* TODO /** */
 }
}
module.exports = employeeDAO;