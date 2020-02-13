package com.ssafy.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.UserDto;
import com.ssafy.wine.dto.WineDto;
import com.ssafy.wine.entity.WineLike;
import com.ssafy.wine.service.WineLikeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "3. WineLike" }, description = "WineLike 정보 REST API")
@RequestMapping(value = "/winelike")
@CrossOrigin(origins = "*")
public class WineLikeController {

	@Autowired
	private WineLikeService wineLikeService;

	@Autowired
	private UserController userController;
	
	@ApiImplicitParams({
		@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "좋아요 추가")
	@PutMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long wid) {
		try {
			Long uid = userController.findUserById().getData().getUid();
			WineLike like = wineLikeService.create(uid, wid);
			wineLikeService.updateLikeNum(wid);
			StringBuilder sb = new StringBuilder();
			sb.append("User: ").append(like.getUser().getEmail()).append("\n")
			.append("Wine: ").append(like.getWine().getNameKor()).append("\n")
			.append("WineLike 추가되었습니다.");
			return new ResponseEntity<Object>(sb.toString(), HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiImplicitParams({
		@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "좋아요 취소/삭제")
	@DeleteMapping("/delete")
	public ResponseEntity<Object> delete(@RequestParam Long wid) {
		try {
			Long uid = userController.findUserById().getData().getUid();
			wineLikeService.delete(uid, wid);
			wineLikeService.updateLikeNum(wid);
			return new ResponseEntity<Object>("WineLike 삭제되었습니다.", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
		@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "해당 유저가 좋아요한 와인")
	@GetMapping("/findByUser")
	public ResponseEntity<Object> findByUser() {
		try {
			Long uid = userController.findUserById().getData().getUid();
			List<WineDto> wines = wineLikeService.findByUser(uid);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 와인을 좋아요한 유저")
	@GetMapping("/findByWine/{wid}")
	public ResponseEntity<Object> findByWine(@PathVariable Long wid) {
		try {
			List<UserDto> likes = wineLikeService.findByWine(wid);
			return new ResponseEntity<Object>(likes, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
}

