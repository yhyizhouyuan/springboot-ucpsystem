package com.galaxy.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.FilterRegistration;

/**
 * <p>TODO</p>
 *
 * @author Hance
 * @version V1.0.0
 * @date 2021/10/1 17:30
 */
@Configuration
public class WebConfigure implements WebMvcConfigurer {
    @Bean
    public FilterRegistrationBean siteMeshFilter(){
        FilterRegistrationBean filter = new FilterRegistrationBean();
        Meshsite3Filter meshsite3Filter = new Meshsite3Filter();
        filter.setFilter(meshsite3Filter);
        return filter;
    }
}
