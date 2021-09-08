package br.com.myTurn.model;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

public class Reservation {
    private UUID rsvId;
    private Employee employee;
    private LocalDateTime time;


    public Reservation(UUID rsvId,Employee employee, LocalDateTime time) {
        this.rsvId = rsvId;
        this.employee = employee;
        this.time = time;

    }

    public UUID getRsvId() {
        return rsvId;
    }

    public void setRsvId(UUID rsvId) {
        this.rsvId = rsvId;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Reservation)) return false;
        Reservation that = (Reservation) o;
        return Objects.equals(getRsvId(), that.getRsvId()) && Objects.equals(getEmployee(), that.getEmployee()) && Objects.equals(getTime(), that.getTime());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRsvId(), getEmployee(), getTime());
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "employee=" + employee +
                ", time=" + time +
                '}';
    }
}
