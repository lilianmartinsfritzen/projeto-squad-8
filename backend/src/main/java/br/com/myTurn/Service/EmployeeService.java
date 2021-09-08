package br.com.myTurn.Service;


import br.com.myTurn.Exception.DidntFindExcept;
import br.com.myTurn.model.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class EmployeeService {
    List<Employee> employeeList = new ArrayList<>();

    public EmployeeService() {
        this.employeeList = new ArrayList<>();
    }

    public List<Employee> allEmployee(Long id, String nome, String email){
        List<Employee> filtered;
        if((id == null) && (nome !=null) && (email == null)){
            filtered = this.listEmployeesName(nome);
        }
        else if((id != null) && (nome ==null) && (email == null)){
            filtered = this.listEmployeesId(id);
        } else if((email != null) && (nome ==null) && (id == null)){
            filtered = this.listEmployeesEmail(email);
        }else {
            filtered = this.employeeList;
        }
        if(filtered.isEmpty()){
            throw new DidntFindExcept();
        }else {
            return filtered;
        }
    }

    public List<Employee> listEmployeesId(final Long id) {
        return filteredById(id);
    }

    public List<Employee> listEmployeesName(final String nome) {
        return filteredByName(nome);
    }

    public List<Employee> listEmployeesEmail(final String email) {
        return filteredByName(email);
    }

    public Employee foundId(final Long id){
        if(insideListId(id)){
            return this.employeeList.get((int) (id.longValue()-1l));
        }else {
            throw new DidntFindExcept();
        }
    }


    public void update(Long id, String nome, String email){
        if(insideListId(id)){
            updtName(id,nome);
            updtEmail(id,email);
        }
    }

    public Employee register(final Employee employee){
        employee.setId((long) this.employeeList.size() +1);
        try {
            this.employeeList.add(employee);
            return employee;
        }catch (NullPointerException e){
            throw new DidntFindExcept();
        }
    }

    public Boolean delete (Long id){
        if(insideListId(id)){
            this.employeeList.remove(id.intValue()-1);
            return true;
        }
        return false;
    }


    private Boolean insideListId(Long id){
        return ((this.employeeList.size() >= id)&& (id>0));
    }



    private List<Employee> filteredByName(String nome) {
        return this.employeeList.stream().filter(employee -> employee.getNome().contains(nome)).collect(Collectors.toList());
    }

    private List<Employee> filteredById(Long id) {
        return this.employeeList.stream().filter(employee -> employee.getId().equals(id)).collect(Collectors.toList());
    }
    private List<Employee> filteredByEmail(String email) {
        return this.employeeList.stream().filter(employee -> employee.getNome().contains(email)).collect(Collectors.toList());
    }

    private Boolean updtName(Long id, String nome){
        if(nome !=null){
            this.employeeList.get((int) (id.longValue()-1l)).setNome(nome);
            return true;
        }
        return false;
    }

    private Boolean updtEmail(Long id, String email){
        if(email !=null){
            this.employeeList.get((int) (id.longValue()-1l)).setEmail(email);
            return true;
        }
        return false;
    }
}
