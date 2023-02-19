package com.project.trainer.pt.controller;

import com.project.trainer.pt.jwt.JwtTokenRequest;
import com.project.trainer.pt.jwt.JwtTokenResponse;
import com.project.trainer.pt.jwt.JwtTokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwtAuthenticationController {


    private final JwtTokenService jwtTokenService;


    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationController(JwtTokenService jwtTokenService, AuthenticationManager authenticationManager){
        this.jwtTokenService = jwtTokenService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtTokenResponse> generateToken(@RequestBody JwtTokenRequest jwtTokenRequest){
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(jwtTokenRequest.username(), jwtTokenRequest.password());
        var authentication = authenticationManager.authenticate(authenticationToken);
        var token = jwtTokenService.generateToken(authentication);

        return ResponseEntity.ok(new JwtTokenResponse(token));
    }
}
