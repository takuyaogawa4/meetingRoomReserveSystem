package com.example.meetingRoomReserveSystem.service;

import com.example.meetingRoomReserveSystem.entity.Reserve;
import com.example.meetingRoomReserveSystem.mapper.ReserveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;

@Service
@EnableTransactionManagement
public class ReserveService {

    @Autowired
    ReserveMapper reserveMapper;

//    予約確認

    @Transactional
    public List<Reserve> findByReserve(Date reserveDate, String reserveRoom){
        return reserveMapper.findByReserve(reserveDate, reserveRoom);
    }

//    予約確定
    @Transactional
    public String insertReserve(Reserve reserve){
        reserve.setEmployeeId( 1 );
      int a =  reserveMapper.insertReserve( reserve );
        return "会議室の予約が完了しました。";
    }

}
