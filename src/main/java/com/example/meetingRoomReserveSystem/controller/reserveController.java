package com.example.meetingRoomReserveSystem.controller;

import com.example.meetingRoomReserveSystem.entity.Reserve;
import com.example.meetingRoomReserveSystem.service.ReserveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class reserveController {

    @Autowired
    ReserveService reserveService;

//    予約確認
    @RequestMapping("/checkReserve")
    @ResponseBody
    public List<Reserve> checkReserve(@RequestBody Reserve reserve) {
        List<Reserve> reserveList = reserveService.findByReserve( reserve.getReserveDate(), reserve.getReserveRoom() );
        return reserveList;
    }

//    予約登録
    @PostMapping("/insertReserve")
    public void insertReserve(@RequestBody Reserve reserve) {
        //TODO change jason
        reserveService.insertReserve( reserve );

    }

//    マイページ表示（ユーザーの予約表示）
    @GetMapping("/getReserve/{employeeId}")
    public List<Reserve> getReserve(@PathVariable int employeeId) {

        return reserveService.findByAllReserve( employeeId );

    }
//    ユーザーの予約の削除
    @GetMapping("/deleteReserve/{reserveId}")
    public void deleteReserve(@PathVariable int reserveId) {
        reserveService.deleteReserve( reserveId );
    }

}
