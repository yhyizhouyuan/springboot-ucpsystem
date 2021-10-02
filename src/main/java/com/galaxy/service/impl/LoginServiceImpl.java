package com.galaxy.service.impl;

import ch.qos.logback.classic.db.SQLBuilder;
import com.galaxy.service.LoginService;
import com.galaxy.util.AjaxResult;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.servlet.handler.UserRoleAuthorizationInterceptor;

/**
 * <p>TODO</p>
 *
 * @author Hance
 * @version V1.0.0
 * @date 2021/10/1 18:13
 */
public class LoginServiceImpl implements LoginService {
    @Override
    public AjaxResult sendVCode(String username, String password) {
        if (StringUtils.isBlank(username)){
            return AjaxResult.error("请填写用户名");
        }
        if(StringUtils.isBlank(password)){
            return AjaxResult.error("请填写密码");
        }
        return null;
    }
}
