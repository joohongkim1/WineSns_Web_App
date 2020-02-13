package com.ssafy.wine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.FeedInputDto;
import com.ssafy.wine.dto.FeedOutputDto;
import com.ssafy.wine.entity.Feed;
import com.ssafy.wine.enums.FeedRankEnum;
import com.ssafy.wine.enums.FeedReviewEnum;
import com.ssafy.wine.service.FeedService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "4. Feed" }, description = "Feed 정보 REST API")
@RequestMapping(value = "/feed")
@CrossOrigin(origins = "*")
public class FeedController {

	@Autowired
	private FeedService feedService;

	@Autowired
	private UserController userController;

	@ApiImplicitParams({
			@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "Feed 추가 - rating 값으로 review 판단")
	@PostMapping("/create")
	public ResponseEntity<Object> createReview(@RequestBody FeedInputDto feedInput) {
		try {
			Long uid = userController.findUserById().getData().getUid();
			Feed feed = feedService.create(uid, feedInput);
			StringBuilder sb = new StringBuilder();
			sb.append("User: ").append(feed.getUser().getEmail()).append("\n").append("Feed_Id: ").append(feed.getFid())
					.append("\nFeed 작성완료");
			return new ResponseEntity<Object>(sb, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "모든 피드 불러오기")
	@GetMapping("/findAll")
	public ResponseEntity<Object> findAll(@RequestParam FeedReviewEnum type) {
		try {
			List<FeedOutputDto> feeds = feedService.findAll(type);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "해당 유저 Feed 불러오기")
	@GetMapping("/findByUser")
	public ResponseEntity<Object> findByUser(@RequestParam Long uid, @RequestParam FeedReviewEnum type) {
		try {
			List<FeedOutputDto> feeds = feedService.findByUser(uid, type);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 와인 feed(review) 불러오기")
	@GetMapping("/findByWine/{wid}")
	public ResponseEntity<Object> findByWine(@RequestParam Long wid, @RequestParam FeedReviewEnum type) {
		try {
			List<FeedOutputDto> feeds = feedService.findByWine(wid, type);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "리뷰랭크: 조회수, 좋아요 - 리뷰만(rating != null) 불러온다")
	@GetMapping("/ReviewRank/{type}")
	public ResponseEntity<Object> ReviewRank(@PathVariable FeedRankEnum type) {
		try {
			List<FeedOutputDto> feeds = feedService.findRank(type);
			return new ResponseEntity<Object>(feeds, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
		@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "Feed 수정")
	@PutMapping("/update")
	public ResponseEntity<Object> update(@RequestParam Long fid, @RequestBody FeedInputDto feedInput) {
		try {
			Integer result = feedService.update(fid, feedInput);
			return new ResponseEntity<Object>(result + "개 수정되었습니다.", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 Feed 조회수 +1")
	@PutMapping("/updateVisit")
	public ResponseEntity<Object> updateVisit(@RequestParam Long fid) {
		try {
			Integer result = feedService.updateVisit(fid);
			return new ResponseEntity<Object>(result + "개 조회수 증가", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiImplicitParams({
		@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "Feed 제거")
	@DeleteMapping("/delete")
	public ResponseEntity<Object> delete(@RequestParam Long fid) {
		try {
			feedService.delete(fid);
			return new ResponseEntity<Object>("Feed가 제거되었습니다.", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

}
