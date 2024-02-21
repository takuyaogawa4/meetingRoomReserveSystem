package com.example.meetingRoomReserveSystem.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class JsonResponse  {
//    ログイン用　データ
    private int result;
    private String info;
    private Object data;
    private List dataList;


    //コンストラクタ　デフォルト
    public JsonResponse() {
        this.result = 0;
    }

//    コンストラクタ　ログイン成功用　(結果　0が成功　1が失敗)
    public JsonResponse(int result, String info, Object data) {
        this.result = result;
        this.info = info;
        this.data = data;
    }

    //コンストラクタ　予備
    public JsonResponse(int result, String info, List dataList) {
        this.result = result;
        this.info = info;
        this.dataList = dataList;
    }

//    コンストラクタ　失敗用　(結果　0が成功　1が失敗)
    public JsonResponse(int result, String info) {
        this.result = result;
        this.info = info;
    }

}
