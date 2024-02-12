package com.example.meetingRoomReserveSystem.mapper;

import com.example.meetingRoomReserveSystem.entity.Employee;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface EmployeeMapper {

    //    社員登録 WHEREで条件指定　名前で重複検知
    @Insert( "INSERT INTO employee (employeeId,employeeName,password) SELECT (#{employeeId},#{employeeName},#{password} WHERE NOT EXISTS(SELECT * FROM employee WHERE #{employeeName})" )
//    オプションでincrementのIDを入れる
    @Options(useGeneratedKeys = true,keyColumn = "id")

    void insertEmployee(Employee employee);


    //ログイン機能
    @Select( "SELECT * FROM employee WHERE employeeName = #{employeeName} " )
    Employee findByName(String employeeName);


//ログアウト機能

}