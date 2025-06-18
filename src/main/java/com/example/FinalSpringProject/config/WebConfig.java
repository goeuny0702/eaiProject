package com.example.FinalSpringProject.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/image/**")  // 공통 경로
                .addResourceLocations(
                        "file:///C:/upload/image/",          // 사용자 이미지
                        "classpath:/static/image/"           // 기존 정적 이미지
                );
    }
}
