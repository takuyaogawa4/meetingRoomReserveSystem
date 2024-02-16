package com.example.meetingRoomReserveSystem.mapper;

import com.example.meetingRoomReserveSystem.entity.Reserve;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.sql.Date;
import java.util.List;

@Mapper
public interface ReserveMapper {

    //    ログイン者だけの予約確認
    @Select("SELECT * FROM reserve WHERE employeeId = #{employeeId}")
    List<Reserve> findByAllReserve(int employeeId);
//    予約の削除


    //    予約確認
    @Select("SELECT * FROM reserve WHERE reserveRoom = #{reserveRoom} AND reserveDate = #{reserveDate}")
    List<Reserve> findByReserve(Date reserveDate, String reserveRoom);

//    予約確定
//@Options(useGeneratedKeys = true,keyProperty = "reserveId")

    @Insert("INSERT INTO reserve(employeeId,reserveRoom,reserveDate,reserveTime) VALUES (#{employeeId},#{reserveRoom},#{reserveDate},#{reserveTime})")
    int insertReserve(Reserve reserve);

    //予約削除
    @Delete("DELETE FROM reserve WHERE reserveId = #{reserveId}")
    int deleteByReserve(int reserveId);
}