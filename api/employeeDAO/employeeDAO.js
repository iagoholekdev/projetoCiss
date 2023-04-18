
class employeeDAO {
  insertEmployee(data, database, sql) {
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


 // getEmployees(database){
   // database.query('SELECT * FROM funcionario', (function(err, results, rows)  {
     //   const jsonData = JSON.parse(JSON.stringify(results));
      //  console.log(jsonData)
   // }));

  //  console.log("getEmployees")
 // }

  alterEmployees(data, database, sql){

  }

  deleteEmployees(data, database, sql){
  
 }
}
module.exports = employeeDAO;