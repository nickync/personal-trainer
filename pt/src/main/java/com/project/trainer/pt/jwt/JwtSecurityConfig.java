//package com.project.trainer.pt.jwt;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
//
//@Configuration
//@EnableWebSecurity
//@EnableMethodSecurity
//public class JwtSecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, HandlerMappingIntrospector introspector) throws Exception {
//        return httpSecurity
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/authenticate").permitAll()
//                        .requestMatchers(HttpMethod.OPTIONS, "/**")
//                        .permitAll()
//                        .anyRequest()
//                        .authenticated())
//                .csrf(AbstractHttpConfigurer::disable)
//                .sessionManagement(session -> session
//                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
////                .oauth2ResourceServer(
////                        OAuth2ResourceServerConfigurer::jwt
////                )
//                .httpBasic(Customizer.withDefaults())
//                .headers(header -> header
//                        .frameOptions().sameOrigin())
//                .build();
//
//    }
//}
