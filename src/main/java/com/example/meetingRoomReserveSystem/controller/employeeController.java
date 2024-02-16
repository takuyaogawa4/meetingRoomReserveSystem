package com.example.meetingRoomReserveSystem.controller;

import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.entity.JsonResponse;
import com.example.meetingRoomReserveSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class employeeController {
    @Autowired
    EmployeeService employeeService;

    //新規登録の名前重複チェック
    @PostMapping("/create")
    @ResponseBody
    public JsonResponse checkName(@RequestBody Employee employee) {
        return employeeService.checkEmployeeName( employee );
    }
}
