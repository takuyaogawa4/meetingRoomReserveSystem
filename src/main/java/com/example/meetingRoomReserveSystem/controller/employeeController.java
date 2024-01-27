package com.example.meetingRoomReserveSystem.controller;

import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping

public class employeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("register")
    public String register(@RequestBody Employee employee){
       return employeeService.insertEmployee( employee );

    }
    @GetMapping ("login")
    public String findByNameAndPassword(@RequestBody Employee employee){
        String login = employeeService.findByNameAndPassword(employee);
        return login;

    }


}
