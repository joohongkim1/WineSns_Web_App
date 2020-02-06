package com.ssafy.wine.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileLoadDto;
import com.ssafy.wine.service.FileLoadServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@RestController
@Api(tags = { "7. FileLoad" }, description = "File Upload & Download REST API")
@RequestMapping(value = "/fileload")
@CrossOrigin(origins = "*")
public class FileLoadController {

	@Autowired
	private FileLoadServiceImpl fileLoadService;

	@ApiOperation(value = "프로필 사진 업로드 1개만")
	@PostMapping("/uploadProfile")
	public ResponseEntity<Object> uploadProfile(@RequestPart("file") MultipartFile file, @RequestParam Long uid) {
		try {
			FileLoadDto fileDtos = fileLoadService.uploadProfile(file, uid);
			return new ResponseEntity<Object>(fileDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "프로필 배경 업로드 1개만")
	@PostMapping("/uploadBackground")
	public ResponseEntity<Object> uploadBackground(@RequestPart("file") MultipartFile file, @RequestParam Long uid) {
		try {
			FileLoadDto fileDtos = fileLoadService.uploadBackground(file, uid);
			return new ResponseEntity<Object>(fileDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "피드 게시글에 사진 첨부 여러개 (현재 오류)")
	@PostMapping("/uploadFeed")
	public ResponseEntity<Object> uploadFeed(@RequestPart("file") MultipartFile[] files, @RequestParam Long fid) {
		try {
			List<FileLoadDto> fileDtos = new ArrayList<>();
			return new ResponseEntity<Object>(fileDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "프로필 사진 불러오기")
	@GetMapping("/downloadProfile")
	public ResponseEntity<Object> downloadProfile(@RequestParam Long uid) {
		try {
			String path = fileLoadService.downloadProfile(uid);
			return new ResponseEntity<Object>(path, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiOperation(value = "프로필 배경화면 불러오기")
	@GetMapping("/downloadBackground")
	public ResponseEntity<Object> downloadBackground(@RequestParam Long uid) {
		try {
			String path = fileLoadService.downloadBackground(uid);
			return new ResponseEntity<Object>(path, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
	@ApiOperation(value = "피드 사진들 불러오기")
	@GetMapping("/downloadFeed")
	public ResponseEntity<Object> downloadFeed(@RequestParam Long fid) {
		try {
			List<String> paths = fileLoadService.downloadFeed(fid);
			return new ResponseEntity<Object>(paths, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}
	
}
