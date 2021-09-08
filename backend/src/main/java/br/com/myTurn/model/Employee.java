package br.com.myTurn.model;

import java.util.Objects;

public class Employee {
    private Long id;
    private String nome;
    private String Email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public Employee(Long id, String name, String email) {
        this.id = id;
        this.nome = name;
        Email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Employee)) return false;
        Employee employee = (Employee) o;
        return Objects.equals(getId(), employee.getId()) && Objects.equals(getNome(), employee.getNome()) && Objects.equals(getEmail(), employee.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getNome(), getEmail());
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + nome + '\'' +
                ", Email='" + Email + '\'' +
                '}';
    }
}
