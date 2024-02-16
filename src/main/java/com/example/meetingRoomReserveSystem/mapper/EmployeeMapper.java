package com.example.meetingRoomReserveSystem.mapper;

import com.example.meetingRoomReserveSystem.entity.Employee;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface EmployeeMapper {
    //    社員登録 WHEREで条件指定　
    @Insert("INSERT INTO employee(employeeName, password) SELECT #{employeeName}, #{password} from DUAL " +
            "WHERE NOT EXISTS (SELECT * FROM employee WHERE employeeName = #{employeeName})")
//    オプションでincrementのIDを入れる
    int insertEmployee(Employee employee);

    //ログイン機能
    @Select("SELECT * FROM employee WHERE employeeName = #{employeeName} AND password = #{password}")
    List<Employee> findUser(Employee employee);

//ログアウト機能

}