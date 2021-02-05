package com.todoapp.rest.webservices.todoapp.rest.webservices.todoresource.dal;

import com.todoapp.rest.webservices.todoapp.rest.webservices.todoresource.Todo;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@Component
@Service
public class TodoService {

    private static int idCounter = 1;
    private static List<Todo> todos = new ArrayList<Todo>()
    {{
        add(new Todo(idCounter++,"sai","Learn react", false,new Date()));
        add(new Todo(idCounter++,"sai","Learn Java", false,new Date()));
        add(new Todo(idCounter++,"sai","AWS tutorial", false,new Date()));
        add(new Todo(idCounter++,"shravya","Learn react", false,new Date()));
        add(new Todo(idCounter++,"shravya","Learn Java", false,new Date()));
        add(new Todo(idCounter++,"shravya","AWS tutorial", false,new Date()));
    }};

    public Todo getTodo(String username, long id) {
        Optional<Todo> userTodo =  todos.stream().filter(x -> x.getUsername().equals(username) && x.getId() == id).findFirst();
        return userTodo.orElse(null);
    }

    public List<Todo> getAllTodos(String username) {
        List<Todo> userTodos =  todos.stream().filter(x -> x.getUsername().equals(username)).collect(Collectors.toList());
        return userTodos;
    }

    public Todo save(Todo todo, String username)
    {
        todo.setUsername(username);
        if(todo.getId() == -1)
        {
            todo.setId(idCounter++);
            todos.add(todo);
        }
        else
        {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(long id)
    {
        Todo todo = findById(id);

        if(todo == null)
            return null;

        if(todos.remove(todo))
        {
            return todo;
        }
        return null;
    }

    public Todo findById(long id)
    {
        for(Todo t : todos)
        {
            if(t.getId() == id)
            {
                return t;
            }
        }
        return null;
    }
}
