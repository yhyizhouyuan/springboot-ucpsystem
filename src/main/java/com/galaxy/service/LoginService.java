package com.galaxy.service;

import com.galaxy.util.AjaxResult;

/**
 * <p>TODO</p>
 *
 * @author Hance
 * @version V1.0.0
 * @date 2021/10/1 18:09
 */
public interface LoginService {
    AjaxResult sendVCode(String username, String password);
}
