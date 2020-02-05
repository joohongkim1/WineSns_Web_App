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

import com.ssafy.wine.dto.WineLike;
import com.ssafy.wine.dto.User;
import com.ssafy.wine.dto.Wine;
import com.ssafy.wine.service.WineLikeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "3. WineLike" }, description = "WineLike 정보 REST API")
@RequestMapping(value = "/winelike")
@CrossOrigin(origins = "*")
public class WineLikeController {

	@Autowired
	private WineLikeService wineLikeService;

	@ApiOperation(value = "좋아요 추가")
	@PutMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long uid, @RequestParam Long wid) {
		try {
			WineLike like = wineLikeService.create(uid, wid);
			wineLikeService.updateLikeNum(wid);
			return new ResponseEntity<Object>(like, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "좋아요 취소/삭제")
	@DeleteMapping("/delete")
	public void delete(@RequestParam Long uid, @RequestParam Long wid) {
		try {
			wineLikeService.delete(uid, wid);
			wineLikeService.updateLikeNum(wid);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 유저가 좋아요한 와인")
	@GetMapping("/findByUser")
	public ResponseEntity<Object> findByUser(@RequestParam Long uid) {
		try {
			List<Wine> wines = wineLikeService.findByUser(uid);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 와인을 좋아요한 유저")
	@GetMapping("/findByWine/{wid}")
	public ResponseEntity<Object> findByWine(@PathVariable Long wid) {
		try {
			List<User> likes = wineLikeService.findByWine(wid);
			return new ResponseEntity<Object>(likes, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
}
