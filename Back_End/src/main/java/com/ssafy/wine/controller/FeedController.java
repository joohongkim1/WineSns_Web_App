package com.ssafy.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.Feed;
import com.ssafy.wine.service.FeedService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "6. Feed" }, description = "Feed 정보 REST API")
@RequestMapping(value = "/feed")
@CrossOrigin(origins = "*")
public class FeedController {

	@Autowired
	private FeedService feedService;

	@ApiOperation(value = "Feed 추가")
	@PostMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long uid, @RequestParam(required = false) Long wid,
			@RequestParam String content) {
		try {
			Feed feed = feedService.create(uid, wid, content);
			return new ResponseEntity<Object>(feed, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "Feed 제거")
	@DeleteMapping("/delete")
	public void delete(@RequestParam Long fid) {
		try {
			feedService.delete(fid);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiOperation(value = "해당 유저 feed 불러오기")
	@GetMapping("/findByUser")
	public  ResponseEntity<Object> findByUser(@RequestParam Long uid) {
		try {
			List<Feed> feeds = feedService.findByUser(uid);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiOperation(value = "해당 와인 feed 불러오기")
	@GetMapping("/findByWine/{wid}")
	public  ResponseEntity<Object> findByWine(@RequestParam Long wid) {
		try {
			List<Feed> feeds = feedService.findByWine(wid);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

}
