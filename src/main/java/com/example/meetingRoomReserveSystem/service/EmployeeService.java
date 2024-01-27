package com.example.meetingRoomReserveSystem.service;
import com.example.meetingRoomReserveSystem.entity.Employee;
import com.example.meetingRoomReserveSystem.mapper.EmployeeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Service
@EnableTransactionManagement


public class EmployeeService {

    @Autowired EmployeeMapper employeeMapper;
    //    社員登録
    @Transactional
    public String insertEmployee(Employee employee){
        employeeMapper.insertEmployee( employee );
        return "登録が完了しました。";
    }

//    ログイン機能
@Transactional(readOnly = true)
    public String findByNameAndPassword(Employee employee){
        if(employeeMapper.findByNameAndPassword(employee.getEmployeeName(),employee.getPassword()) != null){

            return "true";
        }else{
            return "false";
        }
    }

}
