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

    //マイページの予約確認
    public List<Reserve> findByAllReserve(int employeeId) {
        return reserveMapper.findByAllReserve( employeeId );
    }

    //    予約確認
    public List<Reserve> findByReserve(Date reserveDate, String reserveRoom) {
        return reserveMapper.findByReserve( reserveDate, reserveRoom );
    }

    //    予約確定
    @Transactional
    public void insertReserve(Reserve reserve) {
        reserveMapper.insertReserve( reserve );
    }

    //予約削除
    @Transactional
    public void deleteReserve(int reserveId) {
        reserveMapper.deleteByReserve( reserveId );
    }
}
