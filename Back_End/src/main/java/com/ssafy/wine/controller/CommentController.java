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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wine.dto.Comment;
import com.ssafy.wine.service.CommentService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "5. Comment" }, description = "Comment 정보 rest api")
@RequestMapping(value = "/comment")
@CrossOrigin(origins = "*")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@ApiOperation(value = "Comment 추가")
	@PostMapping("/create")
	public ResponseEntity<Object> create(@RequestParam Long fid, @RequestParam Long uid, @RequestParam String content) {
		try {
			Comment comment = commentService.create(fid, uid, content);
			return new ResponseEntity<Object>(comment, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "Comment에 대한 답변 추가")
	@PostMapping("/createRe")
	public ResponseEntity<Object> create(@RequestParam Long fid, @RequestParam Long uid,
			@RequestParam(required = false) Long cid, @RequestParam String content) {
		try {
			Comment comment = commentService.create(fid, uid, cid, content);
			return new ResponseEntity<Object>(comment, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "Comment 제거")
	@DeleteMapping("/delete")
	public void delete(@RequestParam Long cid) {
		try {
			commentService.delete(cid);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "해당 feed comment 불러오기")
	@GetMapping("/findByFeed/{fid}")
	public ResponseEntity<Object> findByFeed(@PathVariable Long fid) {
		try {
			List<Comment> comments = commentService.findByFeed(fid);
			return new ResponseEntity<Object>(comments, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

}
