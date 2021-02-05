package com.todoapp.rest.webservices.todoapp.rest.webservices.todoresource;

import com.todoapp.rest.webservices.todoapp.rest.webservices.todoresource.dal.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username)
    {
        return todoService.getAllTodos(username);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getAllTodos(@PathVariable String username, @PathVariable long id)
    {
        return todoService.getTodo(username, id);
    }

    @PostMapping("/users/{username}/todos")
    public  ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo)
    {
        Todo createTodo = todoService.save(todo,username);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public  ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
    {
        Todo userTodo = todoService.save(todo,username);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable long id)
    {
        Todo todo =  todoService.deleteById(id);

        if(todo != null)
        {
            return  ResponseEntity.noContent().build();
        }
        return ResponseEntity.noContent().build();
    }
}
