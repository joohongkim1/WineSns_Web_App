//package com.ssafy.wine.controller.exception;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ssafy.wine.advice.exception.CAuthenticationEntryPointException;
//import com.ssafy.wine.handler.CommonResult;
//
//import lombok.RequiredArgsConstructor;
//
//@RequiredArgsConstructor
//@RestController
//@RequestMapping(value = "/exception")
//public class ExceptionController {
//
//	@GetMapping(value = "/entrypoint")
//	public CommonResult entrypointException() {
//		throw new CAuthenticationEntryPointException();
//	}
//}