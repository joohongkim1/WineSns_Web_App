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

import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.entity.FeedLike;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.service.FeedLikeService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "4. FeedLike" }, description = "FeedLike 정보 REST API")
@RequestMapping(value = "/feedlike")
@CrossOrigin(origins = "*")
public class FeedLikeController {

	@Autowired
	private FeedLikeService feedLikeService;
	
	@ApiOperation(value = "좋아요 추가")
	@PutMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long uid, @RequestParam Long fid) {
		try {
			FeedLike like = feedLikeService.create(uid, fid);
			feedLikeService.updateLikeNum(fid);
			return new ResponseEntity<Object>(like, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "좋아요 취소/삭제")
	@DeleteMapping("/delete")
	public void delete(@RequestParam Long fid, @RequestParam Long uid) {
		try {
			feedLikeService.delete(uid, fid);
			feedLikeService.updateLikeNum(fid);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiOperation(value = "해당 유저가 좋아요한 피드")
	@GetMapping("/findByUser")
	public ResponseEntity<Object> findByUser(@RequestParam Long uid) {
		try {
			List<Feed> wines = feedLikeService.findByUser(uid);
			return new ResponseEntity<Object>(wines, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 피드 좋아요한 유저")
	@GetMapping("/findByWine/{fid}")
	public ResponseEntity<Object> findByWine(@PathVariable Long fid) {
		try {
			List<User> likes = feedLikeService.findByFeed(fid);
			return new ResponseEntity<Object>(likes, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
}
