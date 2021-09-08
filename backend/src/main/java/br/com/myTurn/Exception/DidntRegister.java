package br.com.myTurn.Exception;

public class DidntRegister extends RuntimeException{
    public DidntRegister(){
        super("wasen't able to register, please try again");
    }
}
