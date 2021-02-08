package com.todoapp.rest.webservices.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {
    @GetMapping("/basicauth")
    public AuthenticationBean basicAuth()
    {
        return new AuthenticationBean("You are authenticated");
    }
}
