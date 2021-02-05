package com.todoapp.rest.webservices.todoapp.rest.webservices.todoresource;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private long id;
    private String username;
    private String description;
    private boolean isCompleted;
    private Date targetDate;
}
