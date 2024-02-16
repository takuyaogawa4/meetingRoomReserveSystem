package com.example.meetingRoomReserveSystem.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class JsonResponse implements Serializable {
    private static final long serialVersionUID = 7045589773258130512L;
    private int result;
    private String info;
    private Object data;
    private List dataList;

    public JsonResponse() {
        this.result = 0;
    }

    public JsonResponse(int result, String info, Object data) {
        this.result = result;
        this.info = info;
        this.data = data;
    }

    public JsonResponse(int result, String info, List dataList) {
        this.result = result;
        this.info = info;
        this.dataList = dataList;
    }

    public JsonResponse(int result, String info) {
        this.result = result;
        this.info = info;
    }

}
