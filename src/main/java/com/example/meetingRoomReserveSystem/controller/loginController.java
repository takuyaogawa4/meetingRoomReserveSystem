package com.example.meetingRoomReserveSystem.controller;

import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.entity.JsonResponse;
import com.example.meetingRoomReserveSystem.service.EmployeeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class loginController {
    @Autowired
    EmployeeService employeeService;

    @PostMapping("/login")
    @ResponseBody
    public JsonResponse checkReserve(@RequestBody Employee employee, HttpServletRequest request) {
        JsonResponse jsonResponse = new JsonResponse();
        List<Employee> employeeList = employeeService.findUser( employee );
        if (employeeList == null || employeeList.size() == 0) {
            return new JsonResponse( 1, "not Found" );
        }
        request.getSession().setAttribute( "employee", employeeList.get( 0 ) );
        return new JsonResponse( 0, "success", employeeList.get( 0 ) );
    }
}
