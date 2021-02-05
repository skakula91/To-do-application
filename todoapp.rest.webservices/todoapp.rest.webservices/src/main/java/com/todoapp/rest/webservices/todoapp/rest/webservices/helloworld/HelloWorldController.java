package com.todoapp.rest.webservices.todoapp.rest.webservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld()
    {
        return "Hello world";
    }

    @GetMapping("/test-exceptions")
    public String checkExceptionHandling()
    {
        throw new RuntimeException("checking exception handler");
    }
}
