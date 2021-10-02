package com.galaxy.controller;

import com.galaxy.service.LoginService;
import com.galaxy.util.AjaxResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * <p>TODO</p>
 *
 * @author Hance
 * @version V1.0.0
 * @date 2021/10/1 16:51
 */
@Controller
//@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService loginService;
    @RequestMapping("/login")
    public String login(HttpSession session){
        session.setAttribute("user",null);
        return "login";
    }

    @RequestMapping("sendVCode")
    public AjaxResult sendVCode(String username,String password){
        AjaxResult ajaxResult = loginService.sendVCode(username,password);
        return ajaxResult;
    }
}
