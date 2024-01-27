package com.example.meetingRoomReserveSystem.entity;

import lombok.Data;

import java.sql.Date;

@Data
public class Reserve {
    private int reserveId;
    private int employeeId;
    private String reserveRoom;
    private Date reserveDate;
    private int reserveTime;
    
}
