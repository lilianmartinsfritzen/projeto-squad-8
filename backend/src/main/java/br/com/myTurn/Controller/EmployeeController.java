package br.com.myTurn.Controller;

import br.com.myTurn.Service.EmployeeService;
import br.com.myTurn.model.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private EmployeeService employeeService;
    List<Employee> employeeList = new ArrayList<>();

    public EmployeeController(){
        this.employeeService = new EmployeeService();
    }

    @GetMapping
    public ResponseEntity<List<Employee>> allEmployeesList(
            @RequestParam(required = false)String nome, String email,
            @RequestParam(value = "id", required = false,defaultValue = "0") Long id
    ){
        return new ResponseEntity(this.employeeService.allEmployee(id, nome, email), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee>foundID(@PathVariable Long id){
        return new ResponseEntity(this.employeeService.foundId(id), HttpStatus.FOUND);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Employee register(@RequestBody Employee employee){
        return this.employeeService.register(employee);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Boolean delete(@PathVariable Long id){
        return this.employeeService.delete(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable Long id,
                       @RequestParam(required = false) String nome, String email){
        this.employeeService.update(id, nome, email);}

}
