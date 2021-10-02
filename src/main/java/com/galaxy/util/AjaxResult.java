package com.galaxy.util;

import com.alibaba.fastjson.JSONObject;

/**
 * <p>TODO</p>
 *
 * @author Hance
 * @version V1.0.0
 * @date 2021/10/1 18:02
 */
public class AjaxResult {
    private int code;
    private String msg;
    private int count;
    private Object data;

    public AjaxResult(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public AjaxResult(int code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public AjaxResult(int code, String msg, int count, Object data) {
        this.code = code;
        this.msg = msg;
        this.count = count;
        this.data = data;
    }

    public static  AjaxResult sucess(String msg){
        return new AjaxResult(0,msg);
    }

    public static  AjaxResult sucess(String msg,Object data){
        return new AjaxResult(0,msg,data);
    }

    public static  AjaxResult sucess(String msg,int count,Object data){
        return new AjaxResult(0,msg,count,data);
    }

    public static AjaxResult error(String msg){
        return new AjaxResult(-1,msg);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return JSONObject.toJSONString(this);
    }
}
