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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.CommentDto;
import com.ssafy.wine.entity.Comment;
import com.ssafy.wine.service.CommentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "5. Comment" }, description = "Comment 정보 rest api")
@RequestMapping(value = "/comment")
@CrossOrigin(origins = "*")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@Autowired
	private UserController userController;

	@ApiImplicitParams({
			@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "Comment 추가 - 대댓글은 cid 추가")
	@PostMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long fid, @RequestParam(required = false) Long cid,
			@RequestParam String content) {
		try {
			Long uid = userController.findUserById().getData().getUid();
			Comment comment = commentService.create(fid, uid, cid, content);
			StringBuilder sb = new StringBuilder();
			sb.append("User: ").append(comment.getUser().getEmail()).append("\n")
			.append("Comment_ID: ").append(comment.getCid()).append("\n")
			.append("Comment가 추가되었습니다.");
			return new ResponseEntity<Object>(sb.toString(), HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 feed comment 불러오기")
	@GetMapping("/findByFeed/{fid}")
	public ResponseEntity<Object> findByFeed(@PathVariable Long fid) {
		try {
			List<CommentDto> comments = commentService.findByFeed(fid);
			return new ResponseEntity<Object>(comments, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "해당 Comment 수정")
	@PutMapping("/update")
	public ResponseEntity<Object> update(@RequestParam Long cid, @RequestParam String content) {
		try {
			int result = commentService.update(cid, content);
			return new ResponseEntity<Object>(result + "개 업데이트", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header") })
	@ApiOperation(value = "Comment 제거")
	@DeleteMapping("/delete")
	public ResponseEntity<Object> delete(@RequestParam Long cid) {
		try {
			commentService.delete(cid);
			return new ResponseEntity<Object>("Comment가 삭제되었습니다.", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
}
