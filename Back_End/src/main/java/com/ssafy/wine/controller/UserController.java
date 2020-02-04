package com.ssafy.wine.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
//github.com/woob0129/pp.git
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.User;
import com.ssafy.wine.exception.CUserNotFoundException;
import com.ssafy.wine.handler.CommonResult;
import com.ssafy.wine.handler.SingleResult;
import com.ssafy.wine.repo.UserRepository;
import com.ssafy.wine.service.ResponseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;

@Api(tags = { "2. User" })
@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

	private final ResponseService responseService; // 결과를 처리할 Service
	private final UserRepository userRepository;

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = false, dataType = "String", paramType = "header") })
	@ApiOperation(value = "회원 단건 조회", notes = "access_token으로 회원을 조회한다")
	@GetMapping(value = "/")
	public SingleResult<User> findUserById(@ApiParam(value = "언어", defaultValue = "ko") @RequestParam String lang) {
		// SecurityContext에서 인증받은 회원의 정보를 얻어온다.
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		String email = authentication.getName();
		return responseService
				.getSingleResult(userRepository.findByEmail(email).orElseThrow(CUserNotFoundException::new));
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "회원 수정", notes = "회원정보를 수정한다")
	@PutMapping(value = "/")
	public SingleResult<User> modify(@ApiParam(value = "이메일", required = true) @RequestParam String email,
			@ApiParam(value = "닉네임", required = true) @RequestParam String nickName,
			@ApiParam(value = "비밀번호", required = true) @RequestParam String password) {
		User user = User.builder().email(email).nickName(nickName).password(password).build();
		return responseService.getSingleResult(userRepository.save(user));
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "회원 삭제", notes = "email로 회원정보를 삭제한다")

	@DeleteMapping(value = "/{uid}")
	public CommonResult delete(@ApiParam(value = "UID", required = true, example = "123") @PathVariable Long uid) {
		userRepository.deleteById(uid);
		return responseService.getSuccessResult();
	}
}