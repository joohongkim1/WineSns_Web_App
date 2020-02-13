package com.ssafy.wine.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.wine.dto.FileDownLoadDto;
import com.ssafy.wine.dto.FileUpLoadDto;
import com.ssafy.wine.enums.FileLoadEnum;
import com.ssafy.wine.service.FileLoadServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(tags = { "7. FileLoad" }, description = "File Upload & Download REST API")
@RequestMapping(value = "/fileload")
@CrossOrigin(origins = "*")
public class FileLoadController {

	@Autowired
	private FileLoadServiceImpl fileLoadService;

	@Autowired
	private UserController userController;

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = false, dataType = "String", paramType = "header") })
	@ApiOperation(value = "파일 업로드 - Swagger로 하면 오류, Postman 가능, 유저면 해당 token, feed 이미지면 id")
	@PostMapping("/uploadFile")
	public ResponseEntity<Object> uploadFile(@RequestPart("file") MultipartFile[] files,
			@RequestParam FileLoadEnum type, @RequestParam(required = false, value = "feed id") Long id) {
		try {
			if (id == null)
				id = userController.findUserById().getData().getUid();
			List<FileUpLoadDto> fileDtos = new ArrayList<>();
			for (int i = 0; i < files.length; i++) {
				fileDtos.add(fileLoadService.uploadFile(files[i], type, String.valueOf(id), String.valueOf(i)));
			}
			return new ResponseEntity<Object>(fileDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = false, dataType = "String", paramType = "header") })
	@ApiOperation(value = "파일 불러오기 - 본인이면 token, 다른유저나 feed는 id")
	@GetMapping("/downloadFile")
	public ResponseEntity<Object> downloadFile(@RequestParam FileLoadEnum type, @RequestParam(required = false) Long id,
			HttpServletRequest req) {
		try {
			if (id == null)
				id = userController.findUserById().getData().getUid();
			List<FileDownLoadDto> fileInfoDtos = fileLoadService.downloadFile(type, String.valueOf(id),
					req.getRequestURL().toString().split("/fileload")[0]);
			return new ResponseEntity<Object>(fileInfoDtos, HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

	@ApiImplicitParams({
			@ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = false, dataType = "String", paramType = "header") })
	@ApiOperation(value = "파일 삭제 - 확장자 명까지 필수, 유저면 token, feed면 id")
	@DeleteMapping("/deleteFile")
	public ResponseEntity<Object> deleteFile(@RequestParam FileLoadEnum type, @RequestParam(required = false) Long id,
			@RequestParam String fileName) {
		try {
			if (id == null)
				id = userController.findUserById().getData().getUid();
			String path = fileLoadService.deleteFile(type, String.valueOf(id), fileName);
			return new ResponseEntity<Object>(path + " 파일을 삭제했습니다.", HttpStatus.OK);
		} catch (Exception e) {
			throw e;
		}
	}

}
