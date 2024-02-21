package com.example.meetingRoomReserveSystem.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class rootController {
    @GetMapping("/")
    public String index() {
        return "public";
    }

//    フォールバック用
    @GetMapping("/home/**")
    public String home() {
        return "public";
    }
}
