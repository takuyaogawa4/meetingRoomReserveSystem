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

    @RequestMapping ("/checkReserve")
    @ResponseBody
    public List<Reserve> checkReserve(@RequestBody Reserve reserve){
        List<Reserve> aaaaa = reserveService.findByReserve( reserve.getReserveDate(),reserve.getReserveRoom());
        return aaaaa;
    }
    @PostMapping("/insertReserve")
    public String insertReserve(@RequestBody Reserve reserve){
        //TODO change jason
        String insertMessage = reserveService.insertReserve( reserve );


        return insertMessage;
    }

}
