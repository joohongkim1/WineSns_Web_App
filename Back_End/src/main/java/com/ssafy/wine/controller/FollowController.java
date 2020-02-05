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

import com.ssafy.wine.entity.Follow;
import com.ssafy.wine.entity.User;
import com.ssafy.wine.service.FollowService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "6. Follow" }, description = "팔로우 정보 REST API")
@RequestMapping(value = "/follow")
@CrossOrigin(origins = "*")
public class FollowController {
	@Autowired
	private FollowService followService;

	@ApiOperation(value = "follow 추가")
	@PutMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long fromUid, @RequestParam Long toUid) {
		try {
			if (fromUid.equals(toUid))
				return new ResponseEntity<Object>("same email", HttpStatus.NOT_ACCEPTABLE);

			Follow follow = followService.create(fromUid, toUid);
			return new ResponseEntity<Object>(follow, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "follow 취소/삭제")
	@DeleteMapping("/delete")
	public void delete(@RequestParam Long fromUid, @RequestParam Long toUid) {
		try {
			followService.delete(fromUid, toUid);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "following - 내가 팔로우하는 전체 그룹 반환")
	@GetMapping("/findByFollowing/{fromUid}")
	public ResponseEntity<Object> findByFollowing(@PathVariable Long fromUid) {
		try {
			List<User> following = followService.findByFollowing(fromUid);
			return new ResponseEntity<Object>(following, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "follower - 나를 팔로우한 전체 그룹 반환")
	@GetMapping("/findByFollower/{toUid}")
	public ResponseEntity<Object> findByFollower(@PathVariable Long toUid) {
		try {
			List<User> follower = followService.findByFollower(toUid);
			return new ResponseEntity<Object>(follower, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

}
