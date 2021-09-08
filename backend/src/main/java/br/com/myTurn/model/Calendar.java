package br.com.myTurn.model;

import org.hibernate.type.DateType;

import java.time.LocalDateTime;

public class Calendar {
    private long id;
    private DateType dateType;
    private LocalDateTime specialDate;

    public Calendar(long id, DateType dateType,LocalDateTime specialDate) {
        this.id = id;
        this.dateType = dateType;
        this.specialDate = specialDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public DateType getDateType() {
        return dateType;
    }

    public void setDateType(DateType dateType) {
        this.dateType = dateType;
    }

    public LocalDateTime getSpecialDate() {
        return specialDate;
    }

    public void setSpecialDate(LocalDateTime specialDate) {
        this.specialDate = specialDate;
    }
}
