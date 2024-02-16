package com.example.meetingRoomReserveSystem.service;

import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.entity.JsonResponse;
import com.example.meetingRoomReserveSystem.mapper.EmployeeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@EnableTransactionManagement
public class EmployeeService {
    @Autowired
    EmployeeMapper employeeMapper;

    //    社員登録の名前チェック
    @Transactional
    public JsonResponse checkEmployeeName(Employee employee) {
        int check = employeeMapper.insertEmployee( employee );
        if (check > 0) {
            return new JsonResponse( 0, "登録が完了しました。" );
        } else {
            return new JsonResponse( 1, "登録が失敗しました。" );
        }

    }

    public List<Employee> findUser(Employee employee) {
        return employeeMapper.findUser( employee );
    }
}