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

    @RequestMapping("/checkReserve")
    @ResponseBody
    public List<Reserve> checkReserve(@RequestBody Reserve reserve) {
        List<Reserve> reserveList = reserveService.findByReserve( reserve.getReserveDate(), reserve.getReserveRoom() );
        return reserveList;
    }

    @PostMapping("/insertReserve")
    public void insertReserve(@RequestBody Reserve reserve) {
        //TODO change jason
        reserveService.insertReserve( reserve );

    }

    @GetMapping("/getReserve/{employeeId}")
    public List<Reserve> getReserve(@PathVariable int employeeId) {

        return reserveService.findByAllReserve( employeeId );

    }

    @GetMapping("/deleteReserve/{reserveId}")
    public void deleteReserve(@PathVariable int reserveId) {
        reserveService.deleteReserve( reserveId );
    }

}
