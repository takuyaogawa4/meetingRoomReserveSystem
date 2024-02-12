package com.example.meetingRoomReserveSystem.service;
import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.mapper.EmployeeMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@EnableTransactionManagement


public class EmployeeService {

    @Autowired
    EmployeeMapper employeeMapper;

    //    社員登録
    @Transactional
    public String insertEmployee(Employee employee) {
        employeeMapper.insertEmployee( employee );
        return "登録が完了しました。";
    }
}

    //    ログイン機能
//    public Optional<User> findByName(String employeeName) {
//        return null;

//    public String findByNameAndPassword(Employee employee){


//        if(employeeMapper.findByNameAndPassword(employee.getEmployeeName(),employee.getPassword()) != null){
//
//            return "true";
//        }else{
//            return "false";
//        }
//    }

