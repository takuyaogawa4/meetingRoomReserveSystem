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
        //念のためリストを使用　返却の値が複数出た場合
        List<Employee> employeeList = employeeService.findUser( employee );
        //　ログイン失敗用　(結果　0が成功　1が失敗)
        if (employeeList == null || employeeList.size() == 0) {
            return new JsonResponse( 1, "not Found" );
        }
        //  ログイン成功用　(結果　0が成功　1が失敗)
        return new JsonResponse( 0, "success", employeeList.get( 0 ) );
    }
}
