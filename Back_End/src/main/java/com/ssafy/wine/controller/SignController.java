package com.ssafy.wine.controller;

import java.util.Collections;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.advice.exception.CEmailSigninFailedException;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.handler.CommonResult;
import com.ssafy.wine.handler.SingleResult;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.security.JwtService;
import com.ssafy.wine.service.ResponseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;

@Api(tags = { "1. Sign" })
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*")
public class SignController {

	private final UserRepository userRepository;
	private final JwtService jwtService;
	private final ResponseService responseService;
	private final PasswordEncoder passwordEncoder;

	@ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
	@GetMapping(value = "/signin")
	public SingleResult<String> signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String email,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password) {
		User user = userRepository.findByEmail(email).orElseThrow(CEmailSigninFailedException::new);
		if (!passwordEncoder.matches(password, user.getPassword()))
			throw new CEmailSigninFailedException();
		return responseService.getSingleResult(jwtService.createToken(user.getUsername(), user.getRoles()));
	}

	@ApiOperation(value = "가입", notes = "회원가입을 한다.")
	@PostMapping(value = "/signup")
	public CommonResult signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String email,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password,
			@ApiParam(value = "닉네임", required = true) @RequestParam String nickName) {

		userRepository.save(User.builder().email(email).password(passwordEncoder.encode(password)).nickName(nickName)
				.roles(Collections.singletonList("USER")).build());
		return responseService.getSuccessResult();
	}
}