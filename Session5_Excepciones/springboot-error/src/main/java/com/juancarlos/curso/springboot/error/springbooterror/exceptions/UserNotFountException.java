package com.juancarlos.curso.springboot.error.springbooterror.exceptions;

public class UserNotFountException extends RuntimeException {
    public UserNotFountException(String message) {
        super(message);
    }
}
